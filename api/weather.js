import axios from "axios"

export const getWeatherData = () => {
    axios.get("https://api.darksky.net/forecast/55040b055de63740624ea457e8f8e649/37.8267,-122.4233")
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

