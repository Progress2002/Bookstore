import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { Title, Author, id } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book_item">
      <h2>{Title}</h2>
      <h4>{Author}</h4>
      <button type="button" onClick={handleRemove}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
