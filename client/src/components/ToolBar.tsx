import { AppBar, Box, Button, ButtonGroup, IconButton, MenuItem, Toolbar, Menu } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {Dispatch, SetStateAction, useState} from "react";

interface ToolBarProps {
    setOpenTab: Dispatch<SetStateAction<string>>
}

export default function ToolBar(props: ToolBarProps) {
    const [mainMenuOpen, setMainMenuOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        props.setOpenTab(event.target.id);
        setAnchorEl(null);
    };
    const handleButtonClick = (event) => {
        props.setOpenTab(event.target.id);
    }

    const buttonNames = ["snake", "nutrition-plan", "website-1", "website-2", "website-3", "website-4", "website-5"];

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
                                    id={name}
                                    key={name}
                                    color="secondary"
                                    variant="contained"
                                    size='large'
                                    sx={{ mr: 1, fontSize: '20px' }}
                                    onClick={handleButtonClick}
                                >
                                    {name.replace("-", " ")}
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
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                    >
                        <MenuItem
                            id='settings'
                            sx={{
                                fontSize: '20px',
                            }}
                            onClick={handleClose}
                        >
                            SETTINGS
                        </MenuItem>
                        <MenuItem
                            id='login'
                            sx={{
                                fontSize: '20px',
                            }}
                            onClick={handleClose}
                        >
                            LOGIN
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
