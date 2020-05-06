const HomeReducer = (state = {
    isFetchingWeather : false,
    weather : [],
}, action) => {
    switch (action.type) {
        case "WEATHER_REQUESTED":
            return {
                ...state,
                isFetchingWeather : true
            }; break;
        case "WEATHER_RECEIVED":
            return {
                ...state,
                weather : action.payload,
                isFetchingWeather : false
            }; break;
        case "WEATHER_FAILED":
            return {
                ...state,
                isFetchingWeather : false
            }; break;
        default:
            return state; break;
    }
}

export default HomeReducer;