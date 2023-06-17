import { createContext, useReducer } from 'react';
import { books } from '../book/books';
import { act } from 'react-dom/test-utils';

export const BookContext = createContext();

const reduceBook = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ALL_BOOKS':
      return {
        ...state,
        allBooks: action.payload,
      };

    case 'SEARCH_PRODUCTS':
      return {
        ...state,
        searchInput: action.payload,
      };

    default:
      break;
  }
};

export function BookProvider({ children }) {
  const [state, dispatch] = useReducer(reduceBook, {
    allBooks: books,
    searchInput: '',
  });

  return (
    <BookContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
