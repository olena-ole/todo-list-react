import React from "react";
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Buy some bread" },
    { id: 2, completed: false, title: "Buy some butter" },
    { id: 3, completed: false, title: "Buy some milk" },
  ]);

  function toggleToDo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
      setTodos(todos.concat([{
          id: Date.now(),
          title: title,
          completed: false
      }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>To-Do List</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleToDo} />
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
