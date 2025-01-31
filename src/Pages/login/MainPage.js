import React, {useEffect} from "react";
import { Tooltip, Button } from "@mui/material";
import './MainPage.css';

function MainPage() {
    return (
        <div>
            <div>Image:</div>
            <Tooltip title="Click for a new location!">
                <Button size="large" color= "secondary" variant="contained">New Location</Button>
            </Tooltip>
            </div>
    )
}

export default MainPage;