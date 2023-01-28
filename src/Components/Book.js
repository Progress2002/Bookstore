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
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">{Category}</h4>
            <h2 className="book-title">{Title}</h2>
            <h6 className="book-author">{Author}</h6>
            <div className="action-buttons">
              <button type="button" className="button-outline">Comments</button>
              <div className="vertical-divider" />
              <button type="button" className="button-outline" onClick={removeBookHandler}>Remove</button>
              <div className="vertical-divider" />
              <button type="button" className="button-outline">Edith</button>
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
            <div className="progress-stat">
              <p className="percent-complete">70%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">
                  CURRENT CHAPTER
                </p>
                <p className="current-chapter">
                  Chapter 20
                </p>
              </div>
              <div>
                <button type="button" className="primary-button">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
