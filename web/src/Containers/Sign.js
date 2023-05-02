import "./Sign.css";
import { TextField, Button } from "@mui/material";

const Sign = () => {
    return (
        <div className="sign-up">
            <TextField
                className="sign-up-child"
                sx={{ width: 849 }}
                color="primary"
                variant="filled"
                type="text"
                label="Company Name"
                placeholder="Placeholder"
                size="medium"
                margin="none"
            />
            <TextField
                className="sign-up-item"
                sx={{ width: 849 }}
                color="primary"
                variant="filled"
                type="text"
                label="API Key"
                placeholder="Placeholder"
                size="medium"
                margin="none"
                required
            />
            <TextField
                className="sign-up-inner"
                sx={{ width: 849 }}
                color="primary"
                variant="filled"
                type="text"
                label="Company Field"
                placeholder="Placeholder"
                size="medium"
                margin="none"
                required
            />
            <Button
                className="group-button"
                sx={{ width: 849 }}
                variant="contained"
                color="success"
            >
                Sign Up
            </Button>
            <div className="api-key">Api Key</div>
            <div className="company-name">Company Name</div>
            <div className="company-field">Company Field</div>
            <h1 className="welcome-to-personal">Welcome to Personal CIA</h1>
        </div>
    )
}

export default Sign;