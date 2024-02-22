// TodoForm.js
import React from "react";
import { useForm } from "react-hook-form";
import api from "../services/api";
import "../styles/tailwind.css"; // Import the styles

const TodoForm = ({ onAddTodo }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    data.id = +data.id;
    data.completed = false
    try {
      const response = await api.post("/todos", data);
      onAddTodo(response.data);
      reset();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <form
      className="mb-4 font-primary w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("id", { required: true })}
        placeholder="Todo id"
        className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 placeholder:text-gray-300"
      />
      <input
        {...register("name", { required: true })}
        placeholder="Todo name"
        className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 placeholder:text-gray-300"
      />
      {/*<input
        {...register("status", { required: true })}
        placeholder="Todo status"
        className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 placeholder:text-gray-300"
  />*/}
      <button
        type="submit"
        className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
