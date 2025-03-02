import './App.css';
import {Box, Typography} from '@mui/material';
import ToolBar from "./ToolBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import appUrl from "./lib/appUrl";

function App() {

    return (
        <BrowserRouter>
            {/*Router*/}
            <Routes>
                <Route path="/" element={
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
                            {/* Toolbar */}
                            <Box>
                                <ToolBar/>
                            </Box>

                            {/*MainMenu*/}
                            <Box
                                sx={{
                                    marginTop: '50px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    style={{
                                        objectFit: 'contain',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    src={`${appUrl}images/MainMenu.png`}
                                    alt="background"
                                />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        position: 'absolute',
                                        transform: 'translateY(130px)',
                                        padding: '8px 16px',
                                    }}
                                >
                                    WhatDeSnakeDoin?
                                </Typography>
                            </Box>

                        </Box>
                    </>
                }/>
                <Route path="/snake" element={
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100vh',
                            backgroundColor: '#45304c',
                            color: 'white',
                        }}
                    >
                        {/* Toolbar */}
                        <Box>
                            <ToolBar/>
                        </Box>
                        <Box>
                            {/*Snake*/}
                        </Box>
                    </Box>
                }/>
                <Route path="/nutritionplan" element={
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100vh',
                            backgroundColor: '#45304c',
                            color: 'white',
                        }}
                    >
                        {/* Toolbar */}
                        <Box>
                            <ToolBar/>
                        </Box>
                        <Box>
                            {/*nutritionplan*/}
                        </Box>
                    </Box>
                }/>

                {/*Dynamic Websites*/}
            </Routes>
        </BrowserRouter>

    )
        ;
}

export default App;
