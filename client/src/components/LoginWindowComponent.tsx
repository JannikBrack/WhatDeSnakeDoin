import React, {useState} from "react";
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {LoginContextType, useLoginContext, UserData} from "../context/LoginContext";
import appUrl from "../lib/appUrl";
import {useNavigate} from "react-router-dom";

export default function LoginWindowComponent() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    const loginContext: LoginContextType = useLoginContext();

    return (
        <Paper
            elevation={6}
            sx={{
                width: "100%",
                maxWidth: "400px",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "12px",
                backgroundColor: "#fff",
            }}
        >
            <Typography variant="h5" component="h1" color='primary' sx={{fontWeight: "bold", mb: 2}}>
                Login
            </Typography>

            <Box sx={{width: "100%", display: "flex", flexDirection: "column", gap: 2}}>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#61446b',
                            },
                            '&:hover fieldset': {
                                borderColor: '#61446b',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#61446b',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#61446b',
                        },

                        input: {
                            color: '#61446b',
                        }
                    }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#61446b',
                            },
                            '&:hover fieldset': {
                                borderColor: '#61446b',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#61446b',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#61446b',
                        },

                        input: {
                            color: '#61446b',
                        }
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{mt: 2, py: 1.2, fontSize: "1rem", textTransform: "none"}}
                    onClick={() => {
                        loginContext.login(username, password).then((success: boolean) => {
                            if (success) {
                                navigate('/')
                            }
                        });
                    }}
                >
                    Sign In
                </Button>
            </Box>
        </Paper>
    );
}
