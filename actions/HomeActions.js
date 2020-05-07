import { connect } from "react-redux";
import Home from "../navigation/Home";
import axios from "axios";

export const getData = (url) => {
    return async dispatch => {
        dispatch({
            type : "WEATHER_REQUESTED"
        });
        axios.get(url)
            .then((response) => {
                console.log(response.data)
                dispatch({
                    type : "WEATHER_RECEIVED",
                    payload : response.data
                })
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type : "WEATHER_FAILED",
                    payload : err
                })
            });
    }
}

const deleteTodo = (id) => ({
    type : "DELETE_TODO",
    payload : id
})

const doneTodo = (id) => ({
    type : "DONE_TODO",
    payload : id
})

const fromLocalToStore = (todos) => ({
    type : "FROM_LOCAL_TO_STORE",
    payload : todos
})

const mapStateToProps = (state) => ({
    weatherData : state.HomeReducer.weather,
    todos : state.TodoReducer.todos
});

const mapDispatchToProps = (dispatch) => ({
    fetchDataFromApi : (url) => dispatch(getData(url)),
    fromLocalToStore : (todos) => dispatch(fromLocalToStore(todos)),
    deleteTodo : (id) => dispatch(deleteTodo(id)),
    done : (id) => dispatch(doneTodo(id))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Home);