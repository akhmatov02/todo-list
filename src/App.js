import { useState } from "react";
import ToDo from "./component/ToDo";
import ToDoForm from "./component/ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString().substr(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) =>todo.id !== id)])
  };
  const handleTogle = (id) => {
     setTodos([...todos.map((todo)=>todo.id === id ? {...todo,complete: !todo.complete} : {...todo} )])
  };
  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleTogle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default App;
