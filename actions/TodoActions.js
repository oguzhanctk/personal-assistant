import { connect } from "react-redux";
import Todo from "../navigation/Todo"

const addTodo = (todo) => ({
    type : "ADD_TODO",
    payload : todo
});

const mapStateToProps = (state) => ({
    todos : state.TodoReducer.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo : (todo) => dispatch(addTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);