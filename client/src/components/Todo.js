import React from "react";
import EditTodo from "./EditTodo";

const Todo = ({ todo, onDelete, onPatch, onUpdate }) => {
  let completed = false;

  const convertStatus = (id) => {
    completed = !completed;
    onPatch(id, completed);
  };

  return (
    <div className="flex justify-between items-center bg-violet-800 text-white py-3 px-4 rounde-md mb-1 ">
      <li key={todo.id} className="">
        <p className="font-primary">{todo.name}</p>

        <EditTodo todo={todo} onUpdate={onUpdate} />

        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-500 text-white p-2 rounded mt-2 me-2 hover:bg-red-700"
        >
          Delete
        </button>

        {todo.completed ? (
          <span className="bg-black text-white p-2 rounded mt-2 me-2 cursor-auto	">
            FINISHED%
          </span>
        ) : (
          <button
            onClick={() => convertStatus(todo.id)}
            className="bg-green-500 text-white p-2 rounded mt-2 hover:bg-red-700"
          >
            Completed?
          </button>
        )}
      </li>
    </div>
  );
};

export default Todo;
