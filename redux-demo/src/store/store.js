import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterreducer';
import todoReducer from '../reducers/todoReducer';
import themeReducer from '../reducers/themeReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
  },
});

export default store;
