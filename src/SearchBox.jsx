import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import { useEffect, useState } from "react";
import axios from "axios"

export default function SearchBox({ importInfo }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "41464f7e65786f493f98001c8c86a719";
    let [city, setCity] = useState("Dhaka");
    let [error, setError] = useState(false);
    useEffect(()=>{
        getWeather();

    },[])

    let getWeather = async () => {
        try {
            let response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let res = response.data;
            console.log(res);
            let weather = {
                name: res.name,
                temp: res.main.temp,
                tempMin: res.main.temp_min,
                tempMax: res.main.temp_max,
                humidity: res.main.humidity,
                feelsLike: res.main.feels_like,
                description: res.weather[0].description
            }
            console.log(weather);
            setError(false);
            importInfo(weather);
            return weather;
        }
        catch (err) {
            setError(true);
            console.log("No Place");
        }

    }


    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit =async (event) => {
       event.preventDefault();
        setCity("");
        await getWeather();
        console.log(city);
    }
    return (
        <div className="SearchBox">
            <form action="#" onSubmit={handleSubmit}>
                <TextField
                    id="searchBox"
                    label="City Name"
                    variant="outlined"
                    size="small"
                    required
                    color="primary"
                    value={city}
                    onChange={handleChange}
                />
                <IconButton
                    color="primary"
                    variant="contained"
                    aria-label="add an alarm"
                    type="submit"
                >
                    <SearchIcon className="search" />
                </IconButton>
            </form>
                {error && <p>No Such place Exists!</p>}
        </div>
    );
}
