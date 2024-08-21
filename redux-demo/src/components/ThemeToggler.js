import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ThemeToggler = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div style={{ color: theme === 'dark' ? 'gold' : 'black', padding: '10px' }}>
      <h2>Theme Toggler</h2>
      <p>Current theme: {theme}</p>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
