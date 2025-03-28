import React, {useEffect, useState} from "react";
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import colors from '../config/color.config.json';
import DeleteIcon from '@mui/icons-material/Delete';
import {Snake, SnakeContextType, useSnakeContext} from "../context/SnakeContext";
import {useLoginContext} from "../context/LoginContext";
import DeleteSnakeFormComponent from "./DeleteSnakeFormComponent";

export default function SnakeViewerComponent() {
    const snakeContext: SnakeContextType = useSnakeContext();
    const loginContext = useLoginContext();
    const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
    const [toDeleteSnake, setToDeleteSnake] = useState<number>(0);

    const snakeList: Snake[] = snakeContext.snakes;

    const addSnake = () => {

    }
    const deleteSnake = (id: number) => {
        //deleteSnake in backend and refetch
    }

    const handleAddSnake = () => {
        addSnake();
    };

    const handleDeleteSnake = (id: number) => {
        setToDeleteSnake(id);
        setOpenDeleteDialog(true);
    };

    useEffect(() => {
        console.log(loginContext.loggedInUser)
        console.log(snakeList);
    }, [snakeList, loginContext.loggedInUser]);

    if (snakeContext.isLoading) return (<p>Snakes are loading...</p>);

    return (
        <>
            <DeleteSnakeFormComponent openDeleteDialog={openDeleteDialog} setOpenDeleteDialog={setOpenDeleteDialog}
                                      toDeleteSnake={toDeleteSnake}/>
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
                        <Grid
                            key={snake.id}
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 4
                            }}>
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
                                        <img width={100} height={100} src={`/images/Icon.png`}
                                             alt="Default Snake Icon"/>}
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
        </>
    );
}
