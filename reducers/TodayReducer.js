const TodayReducer = (state = {
    news : [],
    isFetchingNews : false
}, action) => {
    switch (action.type) {
        case "NEWS_REQUESTED":
            return {
                ...state,
                isFetchingNews : true
            }; break;
        case "NEWS_RECEIVED":
            return {
                ...state,
                news : action.payload,
                isFetchingNews : false
            }; break;
        case "NEWS_FAILED":
            return {
                ...state,
                isFetchingNews : false
            }; break;
        default: 
            return state; break;
    }
}

export default TodayReducer;