import React from "react";
import TodoItem from "./TodoItem"; // Assuming you have a TodoItem component
const TodoBoard = ({ todoList }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {Array.isArray(todoList) && todoList.length > 0 ? (
        todoList.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
