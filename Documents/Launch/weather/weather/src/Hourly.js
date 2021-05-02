import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_api_key;

export default function Hourly(w){

    const [hour, setHour] = useState(null);


    useEffect(() => {
        const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
        url.searchParams.append("appid", API_KEY);
        url.searchParams.append("lat", "33.44");
        url.searchParams.append("lon", "-94.04");
        url.searchParams.append("units", "imperial");
        url.searchParams.append("exclude", "current,minutely,daily,alerts");
        fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((obj) => {
            // also important to check html error codes
            // 200 means no errors
            if (obj.cod === 200) {
            setHour(obj);
            } else {
            setHour(false);
            }
        });
    }, []);



    //<pre>{JSON.stringify(weather, undefined, 4)}</pre>

    /*return(hour&&(
        <div>
            <pre>{JSON.stringify(hour, undefined, 4)}</pre>
        </div>
    ));*/

    return(
        <div>
            <p>INSERT HOURLY FORECASE HERE</p>
        </div>
    );

};