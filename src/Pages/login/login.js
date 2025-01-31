import React, {useEffect} from "react";
import { Typography, Tooltip, Button, Card } from "@mui/material";
import './login.css';

function HomePage() {
    return (
        <div>
            <div>Image:</div>
            <Tooltip title="Click for a new location!">
                <Button size="large" color= "secondary" variant="contained">New Location</Button>
            </Tooltip>
            </div>
    )
}

export default HomePage;