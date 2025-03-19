import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import {BrowserRouter} from "react-router-dom";
import SnakeContextProvider from "./context/SnakeContext";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import LoginContextProvider from "./context/LoginContext";

const theme = createTheme({
    palette: {
        primary: {
            main: '#61446b',
        },
        secondary: {
            main: '#6f4e7b',
        },
        background: {
            default: '#45304c',
            paper: 'rgba(114,80,125,0.6)',
        },
        divider: 'rgba(113,112,112,0.12)',
        text: {
            primary: '#fff',
            secondary: '#fff'
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: '"Whatdesnakedoin", sans-serif',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: '"Whatdesnakedoin", sans-serif',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: '"Whatdesnakedoin", sans-serif',
                }
            }
        }
    }
});

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <CssBaseline/>
                <BrowserRouter>
                    <SnakeContextProvider>
                        <LoginContextProvider>
                            <App/>
                        </LoginContextProvider>
                    </SnakeContextProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    </StrictMode>,
)
