import React from 'react';
import { Component } from 'react';
import Book from '../representational/Book';

class BookList extends Component {
  constructor(props) {
    super(props);
    console.log('constructor from Booklist');
  }

  // ------------------------------------------------
  UNSAFE_componentWillMount() {
    console.log('componentWillMount from Booklist!');
  }

  // ------------------------------------------------
  componentDidMount() {
    console.log('componentDidMount from Booklist!');
  }

  // ======= Component Update Life Cycle ========
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps from Booklist', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate from Booklist', nextProps, nextState);

    return true; // by default true deya thake
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate from booklist');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate form Booklist');
  }

  // ------------------------------------------------
  render() {
    console.log('render from Booklist!');

    return this.props.bookDetailsProps.map((item, index) => {
      return (
        <Book
          key={item.id}
          name={item.name}
          author={item.author}
          delete={() => this.props.deleteBookStateProps(index)}
          inputChange={(event) => this.props.changeBookNameProps(event, index)}
        />
      );
    });
  }
}

export default BookList;
