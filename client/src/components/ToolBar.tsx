import { AppBar, Box, Button, ButtonGroup, IconButton, MenuItem, Toolbar, Menu } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";

export default function ToolBar() {
    const [mainMenuOpen, setMainMenuOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const buttonNames = ["snake", "nutritionplan", "website_1", "website_2", "website_3", "website_4", "website_5"];

    return (
        <AppBar position="fixed" color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {mainMenuOpen && (
                        <Box sx={{ mr: 3, mt: 1 }}>
                            <img src="/images/Icon.ico" alt="icon" height={70} width={70} />
                        </Box>
                    )}
                    <Box sx={{ overflowX: 'auto', display: 'flex' }}>
                        <ButtonGroup>
                            {buttonNames.map((name) => (
                                <Button
                                    key={name}
                                    color="secondary"
                                    variant="contained"
                                    size='large'
                                    sx={{ mr: 1, fontSize: '20px' }}
                                >
                                    {name}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </Box>
                </Box>

                <Box display="flex" alignItems="center">
                    <IconButton color='inherit' size='large' onClick={handleClick}>
                        <SettingsIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                    <Menu
                        sx={{
                            marginTop: '16px'
                        }}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                    >
                        <MenuItem
                            sx={{
                                fontSize: '20px',
                            }}
                            onClick={handleClose}
                        >
                            Settings
                        </MenuItem>
                        <MenuItem
                            sx={{
                                fontSize: '20px',
                            }}
                            onClick={handleClose}
                        >
                            Login
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
