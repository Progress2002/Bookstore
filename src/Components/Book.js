import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletingBook } from '../redux/fetch/booksFetcher';

const Book = (props) => {
  const {
    Title, Author, id, Category,
  } = props;

  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(deletingBook(id));
  };

  return (
    <li className="book_item">
      <h2>{Category}</h2>
      <h2>{Title}</h2>
      <h4>{Author}</h4>
      <button type="button" onClick={removeBookHandler}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  Category: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
