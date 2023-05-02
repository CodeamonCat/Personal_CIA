import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

import "./Landing.css";

const Landing = () => {
    return (
        <div className="front-page">
            <h1 className="app-name">Personal CIA</h1>

            <Link to="/dashboard">
                <Button
                    variant="outlined"
                    color="success"
                    endIcon={<LoginIcon />}
                >
                    LOG IN
                </Button>
            </Link>

        </div>
    );
};

export default Landing;
