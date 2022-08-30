import { configureStore } from '@reduxjs/toolkit';
import reducerBook from './Books/Books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    reducerBook,
    categoriesReducer,
  },
});

export default store;
