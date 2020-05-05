const HomeReducer = (state = {
    isFetchingWeather : false, 
    isFetchingNews : false, 
    weather : [],
    news : []
}, action) => {
    switch (action.type) {
        case "DATA_REQUESTED":
            return {
                ...state,
                isFetchingWeather : true
            }; break;
        case "DATA_RECEIVED":
            return {
                ...state,
                weather : action.payload
            }; break;
        default:
            return state; break;
    }
}

export default HomeReducer;