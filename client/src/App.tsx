import './App.css';
import {Box, Typography} from '@mui/material';
import ToolBar from "./components/ToolBar";
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
                                    mt: 6,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundImage: `url(${appUrl}images/MainMenu.png)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '100%',
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
