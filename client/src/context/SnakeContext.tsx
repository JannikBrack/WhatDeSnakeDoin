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
    snakes: Snake[];
    isLoading: boolean
}

interface SnakeContextProviderProps {
    children: ReactNode;
}

const createSnake = (snake: Snake) => {
    return;
}

const deleteSnake = (snakeID: number) => {
    console.log(snakeID);
    return;
}

const feedSnake = (snakeID: number, food: string) => {
    return;
}

const SnakeContext = createContext<SnakeContextType | null>(null);

export const SnakeContextProvider: React.FC<SnakeContextProviderProps> = ({children}) => {
    const loginContext = useLoginContext();

    const {data: snakes = [], isLoading} = useQuery({
        queryKey: ["getSnake"],
        queryFn: async () => {

            const response = await authFetch(`${serverUrl}api/snake`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            return response && response.ok ? await response.json() : [];

        }
    });

    return (
        <SnakeContext.Provider value={{createSnake, deleteSnake, feedSnake, snakes, isLoading}}>
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
