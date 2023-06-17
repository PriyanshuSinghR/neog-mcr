import { Icon } from '@iconify/react';
import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

export const BookCard = ({ book }) => {
  const { id, image, title, author } = book;
  const { state, dispatch } = useContext(BookContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div
      key={id}
      style={{
        textAlign: 'left',
        border: '1px solid black',
        padding: '10px',
        position: 'relative',
        margin: '15px',
      }}
    >
      <img src={image} style={{ width: '10em', height: '20em' }}></img>
      <p>{title}</p>
      <p style={{ color: 'GrayText' }}>{author}</p>
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: '100px',
          backgroundColor: 'green',
          borderRadius: '50% 50%',
          height: '50px',
          width: '50px',
          cursor: 'pointer',
        }}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <Icon
          icon="fe:drop-down"
          color="white"
          width="20"
          height="20"
          style={{
            margin: '15px',
          }}
        />
      </div>
      {toggle && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '5px',
            backgroundColor: 'gray',
            padding: '10px',
            borderRadius: '10px',
            cursor: 'pointer',
            width: '170px',
          }}
        >
          <div
            className="toggle"
            style={{ padding: '5px', borderRadius: '5px', display: 'flex' }}
            onClick={(event) =>
              dispatch({
                type: 'UPDATE_ALL_BOOKS',
                payload: state.allBooks.map((e) =>
                  e.id === id ? { ...e, status: 'current' } : e,
                ),
              })
            }
          >
            {book.status === 'current' && (
              <div>
                <Icon
                  icon="teenyicons:tick-small-solid"
                  color="white"
                  width="15"
                  height="15"
                  style={{ backgroundColor: 'green' }}
                />
              </div>
            )}
            Currently Reading
          </div>
          <div
            className="toggle"
            style={{ padding: '5px', borderRadius: '5px', display: 'flex' }}
            onClick={(event) =>
              dispatch({
                type: 'UPDATE_ALL_BOOKS',
                payload: state.allBooks.map((e) =>
                  e.id === id ? { ...e, status: 'want' } : e,
                ),
              })
            }
          >
            {book.status === 'want' && (
              <div>
                <Icon
                  icon="teenyicons:tick-small-solid"
                  color="white"
                  width="15"
                  height="15"
                  style={{ backgroundColor: 'green' }}
                />
              </div>
            )}
            Want To Read
          </div>
          <div
            className="toggle"
            style={{ padding: '5px', borderRadius: '5px', display: 'flex' }}
            onClick={(event) =>
              dispatch({
                type: 'UPDATE_ALL_BOOKS',
                payload: state.allBooks.map((e) =>
                  e.id === id ? { ...e, status: 'read' } : e,
                ),
              })
            }
          >
            {book.status === 'read' && (
              <div>
                <Icon
                  icon="teenyicons:tick-small-solid"
                  color="white"
                  width="15"
                  height="15"
                  style={{ backgroundColor: 'green' }}
                />
              </div>
            )}
            Read
          </div>
          <div
            className="toggle"
            style={{ padding: '5px', borderRadius: '5px', display: 'flex' }}
            onClick={(event) => setToggle(!toggle)}
          >
            none
          </div>
        </div>
      )}
    </div>
  );
};
