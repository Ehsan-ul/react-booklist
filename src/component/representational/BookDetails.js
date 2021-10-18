import React from 'react';

const BookDetails = (props) => {
  if (props.book === null) return <div></div>;
  return (
    <div>
      <h2>{props.book.name}</h2>
      <h4>{props.book.author}</h4>
      <p>{props.book.description}</p>
    </div>
  );
};

export default BookDetails;
