import React, {useEffect} from "react";
import { Tooltip, Button, Typography } from "@mui/material";
import _ from "underscore";
import './MainPage.css';
import { fetchCountries, getRandomCountry } from "../mainActions";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";


function MainPage() {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.main.countries);
    const selectedCountry = useSelector((state) => state.main.selectedCountry);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

   const onClick = () => {
        dispatch(getRandomCountry(countries));
    }

    return (
        <React.Fragment>
        <div>
                { !_.isEmpty(selectedCountry) &&
                    <div className='flag-card'>
                        <Card className='card' sx={{maxWidth: 345}} variant="outlined">
                            <CardActionArea>
                                <CardMedia component="img" height="300" alt={selectedCountry.name} image={(selectedCountry.flag.png)}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5">{'Country: ' + selectedCountry.name}</Typography>
                                    <Typography gutterBottom variant="h6">{'Capital City: ' + selectedCountry.capital}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                }       
                <Tooltip title="Click for a location!">
                <Button className='new-country-button' onClick={() => onClick()} size="large" color= "secondary" variant="contained">{!_.isEmpty(selectedCountry) ? 'New Location' : 'Click for a location!'}</Button>
                </Tooltip>
        </div>
        </React.Fragment>
    )
}

export default MainPage;