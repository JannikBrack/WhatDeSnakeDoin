import './App.css';
import {Box} from '@mui/material';
import ToolBar from "./ToolBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

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
                            <Box>
                                {/*MainMenu*/}
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
