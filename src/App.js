import Todo from "./components/Todo";
import TasksContextProvider from "./context/TasksContextProvider";

const App = () => {
    return (
        <TasksContextProvider>
            <h1>Hello world</h1>
            <Todo />
        </TasksContextProvider>
    );
}

export default App;
