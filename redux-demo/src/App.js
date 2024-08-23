import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ThemeToggler from './components/ThemeToggler';

const App = () => {
  return (
    <div style={{ color: 'gold', backgroundColor: 'black', padding: '20px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      
      <h1>Redux Demo App</h1>
      <div style={{display: 'flex', flexDirection:'column'}}>
        <Counter />
        <TodoList />
        <ThemeToggler />
      </div>
      
      
    </div>
  );
}

export default App;
