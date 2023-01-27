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
    <div className="add_book">
      <h2>ADD NEW BOOK</h2>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="title"
            placeholder="Add Title"
            value={formData.title}
            onChange={dataChangeHandler}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Add Author"
            value={formData.author}
            onChange={dataChangeHandler}
            required
          />
          <button type="submit">ADD BOOK </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
