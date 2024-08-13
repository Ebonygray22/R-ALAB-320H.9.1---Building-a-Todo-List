import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <button onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        disabled={!todo.completed}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
