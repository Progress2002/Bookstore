import React from 'react';
import Categories from './Pages/Categories';
import Books from './Pages/Books';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';

class App extends React.Component {
  state = {
    books: [
      {title: 'A Game of Thrones', author: 'George Raymond Richard Martin'},
      {title: 'The Lord of the Rings', author: 'John Ronald Reuel Tolkien'},
      {title: 'Harry Potter', author: 'Joanne Kathleen Rowling'}
    ]
  };

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Books books={this.state.books} />} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
      </>
    )
  }
};

export default App;
