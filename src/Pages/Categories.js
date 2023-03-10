import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const selectedCategories = useSelector((state) => state.categories.categories[0]);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories container">
      <div className="categ_text">
        <h2>{selectedCategories}</h2>
        <button type="button" onClick={handleClick}>
          Check status
        </button>
      </div>
    </div>
  );
};

export default Categories;
