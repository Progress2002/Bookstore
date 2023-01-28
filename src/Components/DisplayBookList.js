import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { gettingBooks } from '../redux/fetch/booksFetcher';

const DisplayBookList = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(gettingBooks());
  }, [dispatch]);

  return (
    <>
      <div className="book_container">
        <ul className="books">
          {books.map((book) => (
            <Book
              Title={book.title}
              Author={book.author}
              key={book.Id}
              id={book.Id}
              Category={book.category}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DisplayBookList;
