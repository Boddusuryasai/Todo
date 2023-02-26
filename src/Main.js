import React, { useState } from "react";
import { Form } from "./Form";
import { TodoList } from "./TodoList";

function Main() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (todoname) => {
    const newTodo = {
      name: todoname,
      ischecked: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleEdit = (index, editValue) => {
    const updatedTodos = [...todos];
    const Index = updatedTodos.findIndex((u, i) => i === index);
    updatedTodos[Index] = { ...updatedTodos[Index], name: editValue };
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    const Index = updatedTodos.findIndex((u, i) => i === index);
    updatedTodos.splice(Index, 1);
    setTodos(updatedTodos);
  };

  const handleCheck = (index) => {
    const updatedTodos = [...todos];
    const Index = updatedTodos.findIndex((u, i) => i === index);
    updatedTodos[Index] = {
      ...updatedTodos[Index],
      ischecked: !updatedTodos[Index].ischecked,
    };
    setTodos(updatedTodos);
  };

  return (
    <div className="flex justify-center items-center h-screen font-[Poppins]">
      <div className="flex flex-col  items-center justify-center bg-[#046A91] shadow-2xl w-[400px] mx-auto py-6 rounded-3xl  ">
        <Form addNewTodo={addNewTodo} />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      </div>
    </div>
  );
}

export default Main;
