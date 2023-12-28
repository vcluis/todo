import { useState, useContext } from "react";
import TasksContext from "../../context/TasksContext";
import { addTaskAction } from "../../reducers/tasksReducer";

const AddTask = () => {

    const [input, setInput] = useState("");
    const { dispatch } = useContext(TasksContext);

    const handleInput = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTaskAction(input));
        setInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleInput} />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default AddTask;
