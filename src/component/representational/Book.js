import React from 'react';
import '../../stylesheet/Book.css';

const Book = (props) => {
  // console.log('This is Book Component!');

  let { name, author } = props;
  return (
    <div className='Book'>
      <h5 onClick={props.delete}>
        Book: {name} | Author: {author}
      </h5>
      <input onChange={props.inputChange} type='text' value={props.name} />
    </div>
  );
};

export default Book;
