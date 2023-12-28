import { useReducer } from "react";
import { tasksReducer, defaultState } from "../reducers/tasksReducer";
import TasksContext from "./TasksContext";

const TasksContextProvider = ({children}) => {
    const [tasks, dispatch] = useReducer(tasksReducer, defaultState);
    return <TasksContext.Provider value={{tasks, dispatch}}>
            {children}
        </TasksContext.Provider>
}

export default TasksContextProvider;
