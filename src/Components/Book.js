import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { Title, Author } = props;
  return (
    <li className="book_item">
      <h2>{Title}</h2>
      <h4>{Author}</h4>
      <button type="button">Remove</button>
    </li>
  );
};

Book.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
};

export default Book;
