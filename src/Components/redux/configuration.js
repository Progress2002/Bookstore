import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

// combine all reducers together

const reducer = combineReducers({
  book: booksReducer,
  categories: categoriesReducer,
});

// update state in store
const store = configureStore({
  reducer,
});

export default store;
