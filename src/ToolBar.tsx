import {AppBar, Avatar, Box, Button, ButtonGroup, IconButton, Toolbar} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {useState} from "react";

export default function ToolBar() {
    const [mainMenuOpen, setMainMenuOpen] = useState(true);
    const [userInitials, setUserInitials] = useState(null);

    const buttonNames = ["snake", "nutritionplan", "website_1", "website_2", "website_3", "website_4", "website_5"];


    return (
        <AppBar position="fixed" color="primary">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    {mainMenuOpen && (
                        <Box sx={{
                            marginRight: '25px',
                            marginTop: '5px'
                        }}>
                            <img src="/images/Icon.ico" alt="icon" height={"70px"} width={"70px"}/>
                        </Box>
                    )}
                    <ButtonGroup>
                        {buttonNames.map((name) => (<Button key={name} color="secondary" variant="contained" sx={{marginRight: "5px"}}>{name}</Button>))}
                    </ButtonGroup>
                </Box>


                <Box display="flex" justifyContent="center" alignItems="center">
                    <Avatar sx={{marginRight: "10px"}}>{userInitials}</Avatar>
                    <IconButton color="inherit">
                        <SettingsIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
