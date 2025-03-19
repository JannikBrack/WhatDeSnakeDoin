import serverUrl from "../lib/serverUrl";
import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import appUrl from "../lib/appUrl";
import {useNavigate} from "react-router-dom";

export interface UserData {
    username: string;
}

export interface LoginContextType {
    login: (username: string, password: string) => Promise<boolean>;
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
        if (loggedInUser === null && window.location.pathname !== "/login") {
            navigate("/login");
        }
    }, [loggedInUser]);

    async function login(username: string, password: string): Promise<boolean> {
        try {
            const response = await fetch(`${serverUrl}api/user/authentication`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password}),
            });

            if (!response.ok) {
                console.error("Wrong username or password!");
                return false;
            }

            const json = await response.json();
            const userData: UserData = json.user;

            triggerAlert.postMessage({
                message: "Login was successful!",
                severity: "success",
                destination: "MainWindow",
            });

            return true;
        } catch (error) {
            console.error("Login failed: ", error);
            triggerAlert.postMessage({
                message: `Login failed: ${error}`,
                severity: "error",
                destination: "MainWindow",
            });
            return false;
        }
    }

    function logout() {
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
