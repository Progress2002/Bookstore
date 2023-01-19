import React from "react";
import Book from "./Book";

class Books extends React.Component {
  render() {
    return (
      <div>
        {this.props.books.map( (book, index) => 
          <Book title={book.title} author={book.author} key={index} />
        )}
      </div>
    );
  };
};

export default Books;