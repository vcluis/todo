import { useContext, useEffect } from "react";
import Task from "./Task";
import TasksContext from "../../context/TasksContext";

const Tasks = () => {
    const { tasks } = useContext(TasksContext);

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    const renderedTasks = tasks.map(task =>
        <Task key={task.id} id={task.id} text={task.text} done={task.done} />
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Text</th>
                    <th>Done</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { tasks ? renderedTasks : <p>Loading data...</p> }
            </tbody>
        </table>
    );
}

export default Tasks;
