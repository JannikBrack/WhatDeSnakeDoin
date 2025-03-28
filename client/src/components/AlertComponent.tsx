import {Alert, Snackbar} from "@mui/material";
import React from "react";
import {useState} from "react";

type success = "success";
type warning = "warning";
type error = "error";
type info = "info";

/**
 * @prop message is containing alert content
 * @prop severity contains the type of alert
 * @prop duration contains number of seconds in milliseconds
 * @prop origin contains string where it should appear
 */
interface AlertMessage {
    message: string;
    severity: success | warning | error | info;
    duration?: number | undefined;
    destination: string;
}

/**
 * @prop origin is used to determine the window the alert should be visible
 */
interface AlertProps {
    origin: string;
}

/**
 * This component is an alarm system that is able to visualize alarms sent by each component via a broadcast channel.
 * Each message needs a destination. Each implementation of the AlertComponent requires an origin.
 * This is used to determine where the message should be displayed.
 */
export default function AlertComponent(props: AlertProps) {
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<String>("TestMessage");
    const [severity, setSeverity] = useState<success | warning | error | info>("success");
    const [duration, setDuration] = useState<number>();

    const handleClose = () => {
        setSnackbarOpen(false);
    };
    const triggerAlert = new BroadcastChannel("triggerAlert");

    triggerAlert.onmessage = (message: MessageEvent<AlertMessage>) => {
        const data = message.data;
        if (props.origin === data.destination) {
            setSnackbarOpen(true)
            setMessage(data.message);
            setSeverity(data.severity);
            data.duration ? setDuration(data.duration) : setDuration(5000);
        }
    }
    return (
        <>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={duration}
                onClose={handleClose}
                anchorOrigin={{vertical: "top", horizontal: "center"}}
            >
                <Alert
                    severity={severity}
                    onClose={handleClose}
                    sx={{
                        boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
                        border: "1px solid black",
                        borderRadius: "10px",
                        fontWeight: "bold",
                    }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}