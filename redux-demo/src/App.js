import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ThemeToggler from './components/ThemeToggler';

const App = () => {
  return (
    <div style={{ color: 'gold', backgroundColor: 'black', padding: '20px' }}>
      <h1>Redux Demo App</h1>
      <Counter />
      <TodoList />
      <ThemeToggler />
      
    </div>
  );
}

export default App;
