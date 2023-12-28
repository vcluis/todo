import { useContext, useEffect } from "react";
import Task from "./Task";
import TasksContextProvider from "../../context/TasksContextProvider";

const Tasks = () => {
    const { tasks } = useContext(TasksContextProvider);

    /*
    useEffect(() => {
        console.log(tasks);
    });
    */

    const renderedTasks = tasks.map(task => (
        <Task id={task.id} text={task.text} done={task.done} />
    ));

    return (
        <table>
            <thead>
                <th>Id</th>
                <th>Text</th>
                <th>Done</th>
                <th>Action</th>
            </thead>
            <tbody>
                { tasks ? renderedTasks : <p>Loading data...</p> }
            </tbody>
        </table>
    );
}

export default Tasks;
