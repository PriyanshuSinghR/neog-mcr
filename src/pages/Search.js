import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { BookCard } from '../components/BookCard';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Search = () => {
  const { state, dispatch } = useContext(BookContext);
  const getSearchedBooks = state.allBooks.filter((item) =>
    item.title.toLowerCase().includes(state.searchInput.toLowerCase()),
  );

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {getSearchedBooks.map((book) => (
        <div key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
      <Link
        style={{
          textDecoration: 'none',
          position: 'absolute',
          top: '5px',
          left: '200px',
          cursor: 'pointer',
        }}
        to="/"
      >
        <Icon icon="icon-park-solid:left-two" width="30" height="30" />
      </Link>
    </div>
  );
};
