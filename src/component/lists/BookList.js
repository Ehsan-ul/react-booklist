import React from 'react';
import Book from '../representational/Book';

const BookList = (props) => {
  return props.bookDetailsProps.map((item, index) => {
    return (
      <Book
        key={item.id}
        name={item.name}
        author={item.author}
        delete={() => props.deleteBookStateProps(index)}
        inputChange={(event) => props.changeBookNameProps(event, index)}
      />
    );
  });
};

export default BookList;
