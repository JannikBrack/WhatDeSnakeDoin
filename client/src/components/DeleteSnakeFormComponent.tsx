import React from "react";
import { Box, Button, Typography } from "@mui/material";
import colors from "../config/color.config.json";

const handleClick = (deleting: string) => {
    localStorage.setItem("deleteSnakeResult", deleting)
    window.close();
};

export default function DeleteSnakeFormComponent() {
    return (
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
                sx={{ color: "gray", textAlign: "center" }}
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
                    onClick={() => handleClick("yes")}
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
                    onClick={() => handleClick("no")}
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
    );
}
