import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { BookCard } from '../components/BookCard';

export const Home = () => {
  const { state } = useContext(BookContext);
  const filterBooks = (status) =>
    state.allBooks.filter((book) => book.status === status);
  return (
    <div>
      <div>
        <h1>Currently Reading</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {filterBooks('current').length === 0 ? (
            <h3>There is no books in this section.</h3>
          ) : (
            filterBooks('current').map((book) => (
              <div key={book.id}>
                <BookCard book={book} />
              </div>
            ))
          )}
        </div>
      </div>
      <div>
        <h1>Want To Read</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filterBooks('want').length === 0 ? (
            <h3>There is no books in this section.</h3>
          ) : (
            filterBooks('want').map((book) => (
              <div key={book.id}>
                <BookCard book={book} />
              </div>
            ))
          )}
        </div>
      </div>
      <div>
        <h1>Read</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filterBooks('read').length === 0 ? (
            <h3>There is no books in this section.</h3>
          ) : (
            filterBooks('read').map((book) => (
              <div key={book.id}>
                <BookCard book={book} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
