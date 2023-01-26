import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const [formData, setFormData] = useState({ id: '', title: '', author: '' });

  const handleDataChange = (event) => {
    setFormData({
      ...formData,
      id: uuidv4(),
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(formData));
    setFormData({ id: '', title: '', author: '' });
  };

  return (
    <div className="add_book">
      <h2>ADD NEW BOOK</h2>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="title" placeholder="Add Title" value={formData.title} onChange={handleDataChange} required />
          <input type="text" name="author" placeholder="Add Author" value={formData.author} onChange={handleDataChange} required />
          <button type="submit">ADD BOOK </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
