import {AppBar, Box, Button, ButtonGroup, IconButton, Menu, MenuItem, Toolbar} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import React, {MouseEvent, useState} from "react";
import appUrl from "../lib/appUrl";
import {Link} from "react-router-dom";

const ToolBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    // Open Menu
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Open URL and close Menu
    const handleClose = (event: any) => {
        window.open(appUrl + (event.target as HTMLButtonElement).id, '_self');
        setAnchorEl(null);
    };

    const buttonNames = ["snake", "nutrition-plan", "website-1", "website-2", "website-3", "website-4", "website-5"];

    return (
        <AppBar position="fixed" color="primary">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Box sx={{mr: 3, mt: 1}}>
                        <img src="/images/Icon.ico" alt="icon" height={70} width={70}/>
                    </Box>
                    <Box sx={{overflowX: 'auto', display: 'flex'}}>
                        <ButtonGroup>
                            {buttonNames.map((name) => (
                                <Link to={`/${name}`} key={name}>
                                    <Button
                                        id={name}
                                        key={name}
                                        color="secondary"
                                        variant="contained"
                                        size='large'
                                        sx={{mr: 1, fontSize: '20px'}}
                                    >
                                        {name.replace("-", " ")}
                                    </Button>
                                </Link>
                            ))}
                        </ButtonGroup>
                    </Box>
                </Box>

                <Box display="flex" alignItems="center">
                    <IconButton color='inherit' size='large' onClick={handleClick}>
                        <SettingsIcon sx={{fontSize: 30}}/>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem id='settings' sx={{fontSize: '20px'}} onClick={handleClose}>
                            SETTINGS
                        </MenuItem>
                        <MenuItem id='login' sx={{fontSize: '20px'}} onClick={handleClose}>
                            LOGIN
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

// ✅ Wrap in React.memo to prevent unnecessary re-renders
export default React.memo(ToolBar);
