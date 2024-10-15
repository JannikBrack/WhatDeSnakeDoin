import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
export default function ToolBar() {
    return (
        <>
            <AppBar
                position="fixed"
            >
                <Toolbar>
                    <h1>Dies ist ein Test</h1>
                </Toolbar>
            </AppBar>
        </>
    );
}