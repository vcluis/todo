import { useState, useContext } from "react";
import { updateTaskAction, deleteTaskAction } from "../../reducers/tasksReducer";
import TasksContextProvider from "../../context/TasksContextProvider";

const Task = ({id, text, done}) => {
    
    const [task, setTask] = useState({
        id,
        text,
        done
    });

    const { dispatch } = useContext(TasksContextProvider);

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: [e.target.value]
        });
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
                <input type="text" name="text" value={text} onChange={handleChange} />
            </td>
            <td>
                <input type="checkbox" name="done" value={task.done} onChange={handleChange} />
            </td>
            <td>
                <form action={handleDelete}>
                    <button>Delete</button>
                </form>
            </td>
        </tr>
    );
// });
}

export default Task;
