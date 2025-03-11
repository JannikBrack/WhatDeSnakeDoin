import './App.css';
import {Box, Typography} from '@mui/material';
import ToolBar from "./components/ToolBar";
import appUrl from "./lib/appUrl";
import {useState} from "react";

function App() {
    const [openTab, setOpenTab] = useState<string>('main-menu');

    const openMainMenu = openTab === 'main-menu';
    const openSnake = openTab === 'snake';
    const openNutritionplant = openTab === 'nutrition-plan';

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
                {/* Toolbar */}
                <Box>
                    <ToolBar setOpenTab={setOpenTab}/>
                </Box>

                {
                    /*MainMenu*/
                    openMainMenu && <Box
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
                }
                {
                    openSnake && <Box
                        sx={{
                            ...mainBoxConfig,
                            backgroundImage: `url(${appUrl}images/Background.png)`,
                        }}
                    >
                        <Typography>Test</Typography>
                    </Box>
                }
            </Box>
        </>
    );
}

export default App;
