import { connect } from "react-redux";
import Home from "../navigation/Home";
import axios from "axios";

export const getData = (url) => {
    return async dispatch => {
        dispatch({
            type : "DATA_REQUESTED"
        });
        axios.get(url)
            .then((response) => {
                dispatch({
                    type : "DATA_RECEIVED",
                    payload : response.data
                })
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type : "REQUEST_FAILED",
                    payload : err
                })
            });
    }
}

const mapStateToProps = (state) => ({
    weatherData : state.HomeReducer.weather
});

const mapDispatchToProps = (dispatch) => ({
    fetchDataFromApi : (url) => dispatch(getData(url))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Home);