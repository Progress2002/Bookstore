import types from '../types/types';

// initial state
const initialState = {
  books: [],
};

// Actions creators
export const addBook = (newBook) => ({
  type: types.ADDED_BOOK,
  newBook
});

export const removeBook = (id) => ({
  type: types.REMOVE_BOOK,
  id
});

// Reducer Creator
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADDED_BOOK:
      return {
        ...state,
        books: [...state, action.payload],
      };
    case types.REMOVE_BOOK:
      return {
        ...state,
        books: [...state.filter((book) => book.id !== action.payload.id)],
      };
    default:
      return state;
  };
};

export default booksReducer;