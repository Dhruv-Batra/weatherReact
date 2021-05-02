import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Current from './Current';
import Button from "@material-ui/core/Button";
import Hourly from './Hourly';
const API_KEY = process.env.REACT_APP_api_key;

export default function Input(w){
    const [showCurrent, setShowCurrent] = useState(false)
    const [showHourly, setShowHourly] = useState(false)

    const [weather, setWeather] = useState(null);
    const [lon, setLon] = useState(null);
    const [lat, setLat] = useState(null);

    navigator.geolocation.getCurrentPosition(function(position) {
        setLon(position.coords.longitude);
        setLat(position.coords.latitude);
        console.log(position.coords.longitude);
    });


    //<pre>{JSON.stringify(weather, undefined, 4)}</pre>

    return(lon&&lat&&(
        <div>
            <TextField id="standard-basic" label="Longitude" defaultValue={lon}/>
            <TextField id="standard-basic" label="Longitude" defaultValue={lat}/>
            <br></br><br></br>
      
            {showCurrent ? <div><Button
                onClick={() => {setShowCurrent(false)}}
                variant="contained"
                color="primary"
            >
                Current Weather
            </Button><Current
                long={lon}
                lati={lat}
            /></div> : 
            <Button
                onClick={() => {setShowCurrent(true)}}
                variant="contained"
                color="primary"
            >
                Current Weather
            </Button>}

            <br></br><br></br>

            {showHourly ? <div><Button
                onClick={() => {setShowHourly(false)}}
                variant="contained"
                color="primary"
            >
                Hourly Forecast
            </Button><Hourly/></div> : 
            <Button
                onClick={() => {setShowHourly(true)}}
                variant="contained"
                color="primary"
            >
                Hourly Forecast
            </Button>}
                </div>
            ));

};