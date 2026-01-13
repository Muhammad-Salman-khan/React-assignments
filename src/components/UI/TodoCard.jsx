import React from "react";
import { useState } from "react";
import TodoList from "../TodoList.jsx";
const TodoCard = () => {
  const [tasks, setTasks] = useState([]);
  const [InputValue, setInputValue] = useState("");
  const addTask = () => {
    if (InputValue.trim() === "") return;
    setTasks((e) => [
      {
        id: crypto.randomUUID(),
        task: InputValue,
        comp: false,
      },
      ...e,
    ]);
    setInputValue("");
  };
  const DeleTask = (id) => {
    setTasks((e) => e.filter((e) => e.id !== id));
  };
  const ToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, comp: !task.comp } : task
      )
    );
  };

  return (
    <>
      <div className="min-h-screen max-w-7xl">
        <TodoList
          value={InputValue}
          SetValue={setInputValue}
          tasks={tasks}
          setTasks={setTasks}
          Add={addTask}
          Del={DeleTask}
          ToggleTask={ToggleTask}
        />
      </div>
    </>
  );
};

export default TodoCard;
