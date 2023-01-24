import types from '../types/types';

// initial state
const initialState = {
  categories: [],
};

// Action Creator
export const checkStatus = () => ({
  type: types.BOOK_STATUS_CHECK,
});

// Reducer Creator
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BOOK_STATUS_CHECK:
      return {
        ...state,
        categories: [...state.categories, 'Under construction'],
      };
    default:
      return state;
  }
};

export default categoriesReducer;
