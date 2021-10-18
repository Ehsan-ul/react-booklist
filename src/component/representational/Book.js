import React from 'react';
import '../../stylesheet/Book.css';
import { withRouter } from 'react-router-dom';

const Book = (props) => {
  let { name, author } = props;
  return (
    <div className='Book' onClick={props.selectedBookHandler}>
      <h5>
        Book: {name} | Author: {author}
      </h5>
    </div>
  );
};

export default withRouter(Book);
