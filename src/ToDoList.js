import React from "react";

//components
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button className={"buttonclear"} onClick={handleFilter}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default ToDoList;
