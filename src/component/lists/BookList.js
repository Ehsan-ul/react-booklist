import React from 'react';
import { Component } from 'react';
import Book from '../representational/Book';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class BookList extends Component {
  render() {
    return this.props.bookDetailsProps.map((item, index) => {
      return (
        <Link
          to={'/' + item.id}
          key={item.id}
          style={{ textDecoration: 'none' }}
        >
          <Book
            name={item.name}
            author={item.author}
            selectedBookHandler={() => this.props.selectedBookHandler(item.id)}
          />
        </Link>
      );
    });
  }
}

export default withRouter(BookList);
