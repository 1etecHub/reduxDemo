import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ color: 'gold', backgroundColor: 'black', padding: '10px' }}>
      <h2>Counter using Redux</h2>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
