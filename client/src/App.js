// src/App.js
import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/tailwind.css"; // Import the styles

const App = () => {
  const handleAddTodo = (todo) => {
    console.log(todo);
  };

  return (
    <div className="container bg-blue-950 mt-20 p-8 rounded-md">
      <h1 className="text-white text-4xl mb-20 text-center">
        TODO - LIST  
      </h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList />
    </div>
  );
};

export default App;
