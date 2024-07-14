// src/TodoItem.js

import React from 'react';

const TodoItem = ({ todo, index, removeTodo }) => {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      {todo.text}
      <button className="btn btn-danger btn-sm px-3" onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
};

export default TodoItem;