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
          }}
        >
          <option
            value="current"
            className="toggle"
            style={{ padding: '5px', borderRadius: '5px' }}
            onClick={(event) =>
              dispatch({
                type: 'UPDATE_ALL_BOOKS',
                payload: state.allBooks.map((e) =>
                  e.id === id ? { ...e, status: event.target.value } : e,
                ),
              })
            }
          >
            Currently Reading
          </option>

          <option
            value="want"
            className="toggle"
            style={{ padding: '5px', borderRadius: '5px' }}
            onClick={(event) =>
              dispatch({
                type: 'UPDATE_ALL_BOOKS',
                payload: state.allBooks.map((e) =>
                  e.id === id ? { ...e, status: event.target.value } : e,
                ),
              })
            }
          >
            Want To Read
          </option>
          <option
            value="read"
            className="toggle"
            style={{ padding: '5px', borderRadius: '5px' }}
            onClick={(event) =>
              dispatch({
                type: 'UPDATE_ALL_BOOKS',
                payload: state.allBooks.map((e) =>
                  e.id === id ? { ...e, status: event.target.value } : e,
                ),
              })
            }
          >
            Read
          </option>
          <option
            value="none"
            className="toggle"
            style={{ padding: '5px', borderRadius: '5px' }}
            onClick={(event) =>
              dispatch({
                type: 'UPDATE_ALL_BOOKS',
                payload: state.allBooks.map((e) =>
                  e.id === id ? { ...e, status: event.target.value } : e,
                ),
              })
            }
          >
            None
          </option>
        </div>
      )}
    </div>
  );
};
