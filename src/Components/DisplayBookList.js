import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const DisplayBookList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      <div className="book_container">
        <ul>
          {books.map((book) => (
            <Book
              Title={book.title}
              Author={book.author}
              key={book.id}
              id={book.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DisplayBookList;
