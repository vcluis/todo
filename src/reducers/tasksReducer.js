const ADD = "ADD"
const UPDATE = "UPDATE"
const DELETE = "DELETE"
const CLEAR = "CLEAR"

const defaultState = [];

const addTaskAction = (text) => {
    return {
        type: ADD,
        payload: text
    }
}

const updateTaskAction = (task) => {
    return {
        type: UPDATE,
        payload: task
    }
}

const deleteTaskAction = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}

const clearTasksAction = () => {
    return {
        type: CLEAR
    }
}


const tasksReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD:
            const newTask = {
                id: new Date().getTime(),
                text: action.payload,
                done: false
            }
            return [...state, newTask];
        case UPDATE:
            const index = state.findIndex(item => item.id === action.payload.id);
            delete state[index];
            return [...state, action.payload];
        case DELETE:
            delete state[action.payload];
            return state;
        case CLEAR:
            return defaultState;
        default:
            return state;
    }
}

export {
    ADD,
    UPDATE,
    DELETE,
    CLEAR,
    defaultState,
    addTaskAction,
    updateTaskAction,
    deleteTaskAction,
    clearTasksAction,
    tasksReducer
};
