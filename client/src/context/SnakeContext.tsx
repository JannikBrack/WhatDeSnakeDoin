import React, {createContext, ReactNode, useContext} from "react";
import {useQuery} from "@tanstack/react-query";
import serverUrl from "../lib/serverUrl";
import {useLoginContext} from "./LoginContext";
import {authFetch} from "../ts/authFetch";

export interface Snake {
    id: number;
    name: string;
    species: string;
    gender: string;
    venomous: boolean;
    image: string;
    feeding: any;
}

export interface SnakeContextType {
    createSnake: (snake: Snake) => void;
    deleteSnake: (snakeID: number) => void;
    feedSnake: (snakeID: number, food: string) => void;
    snake: Snake[];
}

interface SnakeContextProviderProps {
    children: ReactNode;
}

const createSnake = (snake: Snake) => {
    return;
}

const deleteSnake = (snakeID: number) => {
    return;
}

const feedSnake = (snakeID: number, food: string) => {
    return;
}

const SnakeContext = createContext<SnakeContextType | null>(null);

export const SnakeContextProvider: React.FC<SnakeContextProviderProps> = ({children}) => {
    const loginContext = useLoginContext();

    const query = useQuery({
        queryKey: ["getSnake"],
        queryFn: async () => {
            if (loginContext.loggedInUser) {
                console.log("fetch");
                const response = await authFetch(`http://localhost:3000/api/snake?user_id=${loginContext.loggedInUser.id}`, {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                });

                if (response && response.ok) {
                    const data = await response.json();
                    return await data;
                } else {
                    return [];
                }
            }
            else return [];
        }
    });

    const snake: Snake[] = (query.data as Snake[]) || [];

    return (
        <SnakeContext.Provider value={{createSnake, deleteSnake, feedSnake, snake}}>
            {children}
        </SnakeContext.Provider>
    );
};

export const useSnakeContext = () => {
    const context = useContext(SnakeContext);
    if (!context) {
        throw new Error("useSnakeContext muss innerhalb eines SnakeContextProvider verwendet werden.");
    }
    return context;
};

export default SnakeContextProvider;
