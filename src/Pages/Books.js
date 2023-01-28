import React from 'react';
import AddBookForm from '../Components/AddBookForm';
import DisplayBookList from '../Components/DisplayBookList';

const Books = () => (
  <div className="container">
    <DisplayBookList />
    <div className="horizontal-divider" />
    <AddBookForm />
  </div>
);

export default Books;
