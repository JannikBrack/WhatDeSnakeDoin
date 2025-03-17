import React, {useState} from "react";
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import colors from '../config/color.config.json';
import DeleteIcon from '@mui/icons-material/Delete';
import popupCenter from "../ts/popupCenter";
import appUrl from "../lib/appUrl";

interface Snake {
    id: string;
    name: string;
    species: string;
    gender: string;
    venomous: boolean;
    owner: string;
    image?: string;
}

export default function SnakeViewerComponent() {
    const [snakeList, setSnakeList] = useState<Snake[]>([]);

    const addSnake = () => {
        setSnakeList([...snakeList, {
            id: "id" + Math.random().toString(16).slice(2),
            name: "Snake",
            species: "Snake",
            gender: "Female",
            venomous: false,
            owner: "you",
        }]);
    }
    const deleteSnake = (key: string) => {
        const newSnakeList = snakeList.filter(snake => {
            return snake.id !== key;
        })
        setSnakeList(newSnakeList);
    }

    const handleAddSnake = () => {
        addSnake();
    };

    const handleDeleteSnake = (key: string) => {
        const popup = popupCenter(`${appUrl}deletesnake`, `Do you really want to delete?`, window, 400, 200);

        if (popup) {
            popup.focus();
        }

        const checkStorage = (event: StorageEvent) => {
            if (event.key === "deleteSnakeResult" && event.newValue === "yes") {
                deleteSnake(key);
                localStorage.removeItem("deleteSnakeResult"); // Cleanup after reading
                window.removeEventListener("storage", checkStorage); // Remove listener
            }
        };

        window.addEventListener("storage", checkStorage);
    };


    return (
        <Paper
            elevation={12}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px',
                width: '80%',
                height: '80%',
                padding: '35px',
                overflow: 'auto',
                backgroundColor: "background.paper"
            }}
        >
            <Button
                sx={{
                    height: '50px',
                    width: '200px',
                    marginBottom: '35px',
                    fontSize: '20px',
                    backgroundColor: colors.newSnakeButton,
                    color: 'white',
                }}
                onClick={handleAddSnake}
            >
                Add New Snake
            </Button>

            <Grid container spacing={3}>
                {snakeList.map((snake) => (
                    <Grid item xs={12} sm={6} md={4} key={snake.id}>
                        <Paper
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '20px',
                                height: 'auto',
                                gap: '20px',
                                position: 'relative'
                            }}
                        >
                            <Button
                                onClick={() => handleDeleteSnake(snake.id)}
                                sx={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    minWidth: 'unset',
                                    padding: '5px'
                                }}
                            >
                                <DeleteIcon sx={{color: colors.deleteSnakeColor}}/>
                            </Button>
                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                {snake.image ?
                                    <img width={100} height={100} src={snake.image} alt={snake.name}/> :
                                    <img width={100} height={100} src={`/images/Icon.png`} alt="Default Snake Icon"/>}
                            </Box>
                            <Box sx={{textAlign: 'center'}}>
                                <Typography variant="h6">Name: {snake.name}</Typography>
                                <Typography variant="h6">Species: {snake.species}</Typography>
                            </Box>
                            <Box sx={{textAlign: 'center'}}>
                                <Typography variant="h6">Gender: {snake.gender}</Typography>
                                <Typography variant="h6">Venomous: {snake.venomous ? "Yes" : "No"}</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}
