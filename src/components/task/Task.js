import { useState, useContext, useEffect } from "react";
import { updateTaskAction, deleteTaskAction } from "../../reducers/tasksReducer";
import TasksContext from "../../context/TasksContext";

const Task = ({id, text, done}) => {
    
    const [task, setTask] = useState({
        id,
        text,
        done
    });

    useEffect(() => {
        console.log(task.done);
        /*
        if(task.done === "on") task.done = true;
        else task.done = false;
        */
    }, [task]);

    const { dispatch } = useContext(TasksContext);

    const handleChange = e => {
        const {name, type, checked, value} = e.target;
        setTask(prev => ({
            ...prev,
            // [e.target.name]: e.target.value
            [name]: type === "checkbox" ? !checked: value
        }));
        dispatch(updateTaskAction(task));
    }

    const handleDelete = e => {
        e.preventDefault();
        dispatch(deleteTaskAction(task.id));
    }

    return (
        <tr>
            <td>#{task.id}</td>
            <td>
                <input type="text" name="text" value={task.text} onChange={handleChange} />
            </td>
            <td>
                <input type="checkbox" name="done" defaultChecked={task.done} onChange={handleChange} />
            </td>
            <td>
                <form onSubmit={handleDelete}>
                    <button type="submit">Delete</button>
                </form>
            </td>
        </tr>
    );
// });
}

export default Task;
