import React from "react";
import { useQuery, useMutation,  queryCache} from "react-query";
import Todo from "./Todo";
import '../styles/tailwind.css'; // Import the styles
import api from "../services/api";

const getTodos = async () => {
  const response = await api.get("/todos");
  return response.data.data;
};

const deleteTodo = async (id) => {
  await api.delete(`/todos/${id}`);
};

const updateTodo = async ({ id, data }) => {
  await api.put(`/todos/${id}`, data);
};

const patchTodo = async ({ id, completed }) => {
  await api.patch(`/todos/${id}`, {completed : completed});
  console.log(completed);
};

const TodoList = () => {
  const { data: todos, status } = useQuery("todos", getTodos);

  const mutationDelete =  useMutation(deleteTodo, {
    onSuccess:  () => {
      queryCache.invalidateQueries("todos");
    },
    
  });

  const mutationPatch = useMutation(patchTodo, {
    onSuccess: () => {
      queryCache.invalidateQueries("todos");
    },
  });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={(id) => mutationDelete.mutate(id)}
          onPatch={(id , completed ) => mutationPatch.mutate({id , completed})}
          onUpdate={updateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
