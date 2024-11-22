import { AppBar, Toolbar, ButtonGroup, Button, Box, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';

export default function ToolBar() {
    const [activeWindow, setActiveWindow] = useState('main-window');

    const handleMenuClick = (window) => {
        setActiveWindow(window);
    };

    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ButtonGroup variant="text" color="inherit" sx={{ flexGrow: 1 }}>
                        {['Schlange', 'Ernährungsplan', 'Website 1', 'Website 2', 'Website 3', 'Website 4', 'Website 5'].map((label, index) => (
                            <Button
                                key={index}
                                onClick={() => handleMenuClick(label.toLowerCase().replace(' ', '-') + '-window')}
                                sx={{
                                    color: 'inherit',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </ButtonGroup>
                    <Box>
                        <IconButton color="inherit" onClick={() => handleMenuClick('settings')}>
                            <SettingsIcon />
                        </IconButton>
                        <Button color="inherit" onClick={() => handleMenuClick('login')}>
                            Login
                        </Button>
                        <Button color="inherit" onClick={() => handleMenuClick('settings')}>
                            Einstellungen
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#45304c', color: 'white' }}>
                <div style={{ display: activeWindow === 'main-window' ? 'block' : 'none' }}>Main Window Content</div>
                <div style={{ display: activeWindow === 'snake-window' ? 'block' : 'none' }}>Snake Window Content</div>
                <div style={{ display: activeWindow === 'plan-window' ? 'block' : 'none' }}>Ernährungsplan Window Content</div>
                <div style={{ display: activeWindow === 'web1-window' ? 'block' : 'none' }}>Website 1 Content</div>
                <div style={{ display: activeWindow === 'web2-window' ? 'block' : 'none' }}>Website 2 Content</div>
                <div style={{ display: activeWindow === 'web3-window' ? 'block' : 'none' }}>Website 3 Content</div>
                <div style={{ display: activeWindow === 'web4-window' ? 'block' : 'none' }}>Website 4 Content</div>
                <div style={{ display: activeWindow === 'web5-window' ? 'block' : 'none' }}>Website 5 Content</div>
                <div style={{ display: activeWindow === 'settings' ? 'block' : 'none' }}>Einstellungen Window Content</div>
                <div style={{ display: activeWindow === 'login' ? 'block' : 'none' }}>Login Window Content</div>
            </Box>
        </>
    );
}
