import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

export const SearchBar = () => {
  const { state, dispatch } = useContext(BookContext);
  const history = useNavigate();

  useEffect(() => {
    history('./search');
  }, [state.searchInput]);
  return (
    <div
      style={{
        margin: 'auto',
      }}
    >
      <input
        value={state.searchInput}
        onChange={(event) =>
          dispatch({ type: 'SEARCH_PRODUCTS', payload: event.target.value })
        }
        style={{
          width: '400px',
          border: '2px solid black',
          borderRadius: '10px',
          fontSize: '18px',
          color: '#4700d3',
          padding: '10px',
        }}
      />
    </div>
  );
};
