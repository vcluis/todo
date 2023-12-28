import { useState, useContext } from "react";
import TasksContextProvider from "../../context/TasksContextProvider";
import { addTaskAction } from "../../reducers/tasksReducer";

const AddTask = () => {

    const [input, setInput] = useState("");
    const { dispatch } = useContext(TasksContextProvider);

    const handleInput = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTaskAction(input));
    }

    return (
        <form action={handleSubmit}>
            <input type="text" value={input} onChange={handleInput} />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default AddTask;
