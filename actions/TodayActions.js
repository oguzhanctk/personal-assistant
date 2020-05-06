import { connect } from "react-redux";
import Today from "../navigation/Today";
import axios from "axios"

export const getData = (url) => {
    return async dispatch => {
        dispatch({
            type : "NEWS_REQUESTED"
        });
        axios.get(url)
            .then((response) => {
                dispatch({
                    type : "NEWS_RECEIVED",
                    payload : response.data.articles.slice(0, 10)
                })
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type : "NEWS_FAILED",
                    payload : err
                })
            });
    }
}

const mapStateToProps = (state) => ({
    news : state.TodayReducer.news
});

const mapDispatchToProps = (dispatch) => ({
    getNews : (url) => dispatch(getData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Today);