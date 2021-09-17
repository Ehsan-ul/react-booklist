import { Component } from 'react';
import BookItem from '../assets/BookItem';
import BookList from './lists/BookList';

class MainComponent extends Component {
  state = {
    bookDetails: BookItem,
    toggoleBooks: true,
  };

  changeBookName = (event, index) => {
    const newBookDetails = [...this.state.bookDetails];

    const bookList = { ...this.state.bookDetails[index] };
    bookList.name = event.target.value;

    newBookDetails[index] = bookList;
    this.setState({
      bookDetails: newBookDetails,
    });
  };

  deleteBookState = (index) => {
    // const bookState = this.state.bookDetails.splice(index, 1);

    // // but directly main state k modify na kora holo good practice.
    // // So map diye ekta copy kore then modify kora jay
    // const bookState = this.state.bookDetails.map((index) => index);
    // bookState.splice(index, 1)

    // Again, good practice is to use spread operator
    const bookState = [...this.state.bookDetails];
    bookState.splice(index, 1);

    this.setState({
      bookDetails: bookState,
    });
  };

  toggoleBooks = () => {
    this.setState({ toggoleBooks: !this.state.toggoleBooks });
  };

  // ------------------------------------------------

  render() {
    const style = {
      marginTop: '5px',
      backgroundColor: 'black',
      color: 'white',
    };

    let newBookDetails = null;

    if (this.state.toggoleBooks) {
      newBookDetails = (
        <BookList
          bookDetailsProps={this.state.bookDetails}
          deleteBookStateProps={this.deleteBookState}
          changeBookNameProps={this.changeBookName}
        />
      );
    }

    return (
      <div className='App'>
        <h2 style={style}>Book List</h2>
        <button onClick={this.toggoleBooks} className='button-primary'>
          Toggole Books
        </button>

        {newBookDetails}
      </div>
    );
  }
}

export default MainComponent;
