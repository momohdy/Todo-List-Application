import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, queryCache } from "react-query";

const EditTodo = ({ todo, onUpdate }) => {
  const { register, handleSubmit, reset } = useForm();

  const mutationUpdate = useMutation(onUpdate, {
    onSuccess: () => {
      queryCache.invalidateQueries("todos");
      reset();
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        data.id = +data.id;
        mutationUpdate.mutate({ id: todo.id, data });
      })}
      className="mt-2 mb-2 flex items-center gap-x-4"
    >
      <input
        {...register("id")}
        defaultValue={todo.id}
        type="hidden"
        className="w-full p-2 border border-white rounded"
      />
      <input
        {...register("name")}
        placeholder="New Name"
        className="w-full p-2 border border-white rounded text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Update
      </button>
    </form>
  );
};

export default EditTodo;
