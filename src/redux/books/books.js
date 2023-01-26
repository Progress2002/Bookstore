import types from '../types/types';

// initial state
const initialState = {
  booksCounter: 4,
  books: [
    { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: '2', title: 'The Art of War', author: 'Sun Tzu' },
    { id: '3', title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez' },
    { id: '4', title: 'In Search of Lost Time', author: 'Marcel Proust' },
  ],
};

// Actions creators
export const addBook = (addedBook) => ({
  type: types.ADDED_BOOK,
  addedBook,
});

export const removeBook = (id) => ({
  type: types.REMOVE_BOOK,
  id,
});

// Reducer Creator
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADDED_BOOK:
      return {
        ...state,
        booksCounter: state.booksCounter + 1,
        books: [...state.books, action.addedBook],
      };
    case types.REMOVE_BOOK:
      return {
        booksCounter: state.booksCounter - 1,
        ...state,
        books: [...state.books.filter((book) => book.id !== action.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
