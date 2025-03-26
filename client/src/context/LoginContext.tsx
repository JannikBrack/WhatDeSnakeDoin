import serverUrl from "../lib/serverUrl";
import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {matchPath} from "react-router-dom";
import {authFetch} from "../ts/authFetch";
export interface UserData {
    id: number;
    username: string;
}

export interface LoginContextType {
    login: (username?: string, password?: string, loginViaCookies?: boolean) => Promise<boolean>;
    logout: () => void;
    loggedInUser: UserData | null;
}

interface LoginContextProviderProps {
    children: ReactNode;
}

const LoginContext = createContext<LoginContextType | null>(null);

const triggerAlert = new BroadcastChannel("triggerAlert");

export const LoginContextProvider: React.FC<LoginContextProviderProps> = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState<UserData | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedInUser === null) {
            console.log(window.location.pathname)
            login("", "", true).then((success: boolean) => {
                !success && navigate("/login");
                success && matchPath(window.location.pathname, '/login') && navigate("/");
            })
        }
    }, [loggedInUser]);

    async function login(username = "", password = "", loginViaCookies = false): Promise<boolean> {
        try {
            const response = await fetch(`${serverUrl}api/user/authentication/`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password, loginViaCookies}),
                credentials: "include",
            });

            if (response.status === 401) {
                console.warn("Session expired or invalid credentials.");
                return false;
            }

            if (!response.ok) {
                !loginViaCookies && console.error("Wrong username or password!");
                return false;
            }

            const json = await response.json();
            setLoggedInUser(json.user);

            return true;
        } catch (error) {
            if (!loginViaCookies) {
                console.error("Login failed: ", error);
                triggerAlert.postMessage({
                    message: `Login failed: ${error}`,
                    severity: "error",
                    destination: "MainWindow",
                })
            }
            return false;
        }
    }

    async function logout() {
        try {
            const response: Response | null = await authFetch(`${serverUrl}logout/`, {
                method: "GET",
                headers: {"Content-Type": "application/response"},
            });
            if (response && response.ok){
                triggerAlert.postMessage({
                    message: "Logout successful",
                    severity: "success",
                    destination: "MainWindow",
                })
            }
        } catch (error) {
            triggerAlert.postMessage({
                // @ts-ignore
                message: error.message,
                severity: "error",
                destination: "MainWindow",
            })
            return [];
        }
        setLoggedInUser(null);
    }

    return (
        <LoginContext.Provider value={{login, loggedInUser, logout}}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginContext = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useLoginContext must be used within a LoginContextProvider.");
    }
    return context;
};

export default LoginContextProvider;
