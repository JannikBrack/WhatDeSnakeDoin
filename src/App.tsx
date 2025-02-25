import './App.css';
import ToolBar from './ToolBar.tsx';
import { Box } from '@mui/material';

function App() {

    return (
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

        </Box>
    );
}

export default App;
