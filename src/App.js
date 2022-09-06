import React, { useState } from "react";
import "./App.css";
import data from "./data.json";

//components
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let newList = [...toDoList];
    newList = [
      ...newList,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(newList);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;