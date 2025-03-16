import React from 'react';
import './App.css';
import {Box, Typography} from '@mui/material';
import ToolBar from "./components/ToolBar";
import appUrl from "./lib/appUrl";
import SnakeViewerComponent from "./components/SnakeViewerComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";

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
                <ToolBar/>
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
                    </Routes>
            </Box>
        </>
    );
}

export default App;
