import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './Pages/Categories';
import Books from './Pages/Books';
import Header from './Components/Header';
import './App.css';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
