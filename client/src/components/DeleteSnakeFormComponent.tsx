import React, {Dispatch, SetStateAction} from "react";
import { Box, Button, Typography } from "@mui/material";
import colors from "../config/color.config.json";
import Dialog from "@mui/material/Dialog";
import snakeContext, {useSnakeContext} from "../context/SnakeContext";

interface DeleteSnakeFormComponentProps {
    openDeleteDialog: boolean;
    setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>;
    toDeleteSnake: number;
}

export default function DeleteSnakeFormComponent(props: DeleteSnakeFormComponentProps) {
    const snakeContext = useSnakeContext();
    return (
        <Dialog open={props.openDeleteDialog}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                    backgroundColor: "#2C2C2C",
                    color: "white",
                    padding: 4,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{color: "gray", textAlign: "center"}}
                >
                    DO YOU REALLY WANT TO DELETE?
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 2,
                        width: "100%",
                    }}
                >
                    <Button
                        onClick={() => {
                            props.setOpenDeleteDialog(false);
                            snakeContext.deleteSnake(props.toDeleteSnake);
                        }}
                        sx={{
                            backgroundColor: colors.deleteSnakeColor,
                            color: "white",
                            px: 3,
                            py: 1,
                            "&:hover": {
                                backgroundColor: "#c62828", // Slightly darker red on hover
                            },
                        }}
                    >
                        Yes
                    </Button>
                    <Button
                        onClick={() => {
                            props.setOpenDeleteDialog(false);
                        }}
                        sx={{
                            backgroundColor: colors.newSnakeButton,
                            color: "white",
                            px: 3,
                            py: 1,
                            "&:hover": {
                                backgroundColor: "#388E3C", // Slightly darker green on hover
                            },
                        }}
                    >
                        No
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
}
