import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addingBook } from '../redux/fetch/booksFetcher';

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });

  const dataChangeHandler = (event) => {
    setFormData({
      ...formData,
      item_id: uuidv4().toString(),
      [event.target.name]: event.target.value,
      category: 'Category Action',
    });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addingBook(formData));
    setFormData({
      item_id: '',
      title: '',
      author: '',
      category: 'Category Action',
    });
  };

  return (
    <section className="add_book">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={onSubmitHandler} className="add-form">
        <input
          className="input"
          type="text"
          name="title"
          placeholder="Add Title"
          value={formData.title}
          onChange={dataChangeHandler}
          required
        />
        <input
          className="input"
          type="text"
          name="author"
          placeholder="Add Author"
          value={formData.author}
          onChange={dataChangeHandler}
          required
        />
        <button type="submit" className="primary-button-big">ADD BOOK </button>
      </form>
    </section>
  );
};

export default AddBookForm;
