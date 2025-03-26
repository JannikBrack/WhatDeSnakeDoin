import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CookiePopup() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            sx={{
                backgroundColor: '#61446b'
            }}
        >
            <DialogTitle>{"Cookies 🍪"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Hi! I am here to tell you that this Website uses cookies.
                </DialogContentText>
                <br/>
                <DialogContentText>
                    How many? The answer is 1.
                </DialogContentText>
                <br/>
                <DialogContentText>
                    This one cookie is used to save your session.
                </DialogContentText>
                <br/>
                <DialogContentText>
                    What does that mean? This cookie saves your login for two weeks
                    and automatically logs you in.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button sx={{color: 'white'}} onClick={handleClose}>Okay!</Button>
            </DialogActions>
        </Dialog>
    );
}