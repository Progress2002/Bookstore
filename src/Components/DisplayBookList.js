import React from 'react';
import Book from './Book';

const DisplayBookList = () => {
  const books = [
    {
      Id: 101,
      Title: 'The Lord of the Rings',
      Author: 'J. R. R. Tolkien',
    },
  ];
  return (
    <>
      <div className="book_container">
        <ul>
          {books.map((book) => (
            <Book
              Title={book.Title}
              Author={book.Author}
              key={book.Id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DisplayBookList;
