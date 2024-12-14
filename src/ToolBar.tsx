import { AppBar, Box, Button, ButtonGroup, IconButton, Toolbar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

export default function ToolBar() {

    return (
        <AppBar position="fixed" color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Button color="inherit">
                        Login
                    </Button>
                    <IconButton color="inherit">
                        <SettingsIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
