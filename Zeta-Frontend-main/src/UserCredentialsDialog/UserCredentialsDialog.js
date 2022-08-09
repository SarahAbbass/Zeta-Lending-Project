import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Container from '@mui/material/Container';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import "./UserCredentialsDialog.css";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
// Component that presents a dialog to collect credentials from the user
export default function UserCredentialsDialog({
    open,
    onSubmit,
    onClose,
    title,
    submitText,
}) {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");
    let [occupation, setOccupation] = useState("");
    let [userType, setUserType] = useState("user");
    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
            <Container className="dialog-container">
                <DialogTitle>{title}</DialogTitle>
                <Container className="form-item">
                    <TextField
                        fullWidth
                        label="Username"
                        type="text"
                        value={username}
                        onChange={({ target: { value } }) => setUsername(value)}
                    />
                </Container>
                <Container className="form-item">
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        value={password}
                        onChange={({ target: { value } }) => setPassword(value)}
                    />
                </Container>
                <Container className="form-item">
                    <TextField
                        fullWidth
                        label="Email"
                        type="text"
                        value={email}
                        onChange={({ target: { value } }) => setEmail(value)}
                    />
                </Container>
                <Container className="form-item">
                    <TextField
                        fullWidth
                        label="Occupation"
                        type="text"
                        value={occupation}
                        onChange={({ target: { value } }) => setOccupation(value)}
                    />
                </Container>
                <FormControl>
                        <InputLabel id="user-type-label">Login Type</InputLabel>
                        <Select
                            labelId="user-type-label"
                            id="user-type"
                            value={userType}
                            label="Login Type"
                            onChange={e => setUserType(e.target.value)}
                        >
                            <MenuItem value="user">User</MenuItem>
                            <MenuItem value="admin">Admin</MenuItem>
                        </Select>
                </FormControl>
                <Box mt={2}>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => onSubmit(username, password, email, occupation, userType)}
                    >
                        {submitText}
                    </Button>
                </Box>
            </Container>
        </Dialog>
    );
}