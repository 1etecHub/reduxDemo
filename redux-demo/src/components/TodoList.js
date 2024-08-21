import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const addTask = () => {
    dispatch({ type: 'ADD_TODO', payload: task });
    setTask('');
  };

  return (
    <div style={{ color: 'gold', backgroundColor: 'black', padding: '10px' }}>
      <h2>Todo List using Redux</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
