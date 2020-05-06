const TodoReducer = (state = {
    todos : []
}, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos : [...state.todos, action.payload]
            }; break;
        case "DELETE_TODO":
            return {
                ...state,
                todos : state.todos.filter((member) => member.id != action.payload)
            }; break;
        case "FROM_LOCAL_TO_STORE":
            return {
                ...state,
                todos : action.payload
            }; break;
        default:
            return state; break;
    }
}

export default TodoReducer;