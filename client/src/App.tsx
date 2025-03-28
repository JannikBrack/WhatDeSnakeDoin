import React from 'react';
import './App.css';
import {Box, Typography} from '@mui/material';
import ToolBar from "./components/ToolBarComponent";
import appUrl from "./lib/appUrl";
import SnakeViewerComponent from "./components/SnakeViewerComponent";
import {Route, Routes, useLocation} from "react-router-dom";
import LoginWindowComponent from "./components/LoginWindowComponent";
import AlertComponent from "./components/AlertComponent";


function App() {
    const mainBoxConfig = {
        mt: 6,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
    }
    const location = useLocation();

    const hideToolBar: string[] = ["/login"];

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    backgroundColor: '#45304c',
                    color: 'white',
                }}
            >
                {!hideToolBar.includes(location.pathname) && <ToolBar/>}
                <AlertComponent origin='MainWindow'/>
                <Routes>
                    <Route path="/" element={
                        <>
                            {/*MainMenu*/}
                            <Box
                                sx={{
                                    ...mainBoxConfig,
                                    backgroundImage: `url(${appUrl}images/MainMenu.png)`,
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        position: 'absolute',
                                        top: 600,
                                        p: 2,
                                        textAlign: 'center',
                                        color: 'white',
                                        borderRadius: 2,
                                    }}
                                >
                                    WhatDeSnakeDoin?
                                </Typography>
                            </Box>
                        </>
                    }/>

                    {/*SnakeSide*/}
                    <Route path="/snake" element={
                        <Box
                            sx={{
                                ...mainBoxConfig,
                                backgroundImage: `url(${appUrl}images/Background.png)`,
                            }}
                        >
                            <SnakeViewerComponent/>
                        </Box>
                    }/>

                    {/*Login*/}
                    <Route path="/login" element={
                        <Box
                            sx={{
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage: `url(${appUrl}images/Background.png)`
                            }}
                        >
                            <LoginWindowComponent/>
                        </Box>
                    }/>
                </Routes>
            </Box>
        </>
    );
}

export default App;
