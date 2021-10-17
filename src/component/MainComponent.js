import { Component } from 'react';
import BookItem from '../assets/BookItem';
import BookList from './lists/BookList';
import NewBook from './representational/NewBook';

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookDetails: BookItem,
      toggoleBooks: true,
    };
    // console.log('Constructor from MainComponent!');
  }

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
  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount from MainComponent!');
  // }

  // ------------------------------------------------
  // // componentDidMount function sobar ses e call hoy
  // componentDidMount() {
  //   console.log('componentDidMount from MainComponent!');
  // }

  // // ====== Component update LifeCycle- by state
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     'shouldComponentUpdate from MainComponent',
  //     nextProps,
  //     nextState
  //   );
  //   return true;
  // }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log('componentWillUpdate from MainComponent');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate form MainComponent');
  // }

  // -----------------------------------------------
  render() {
    // console.log('render from MainComponent!');

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
       <div className="nav-bar">
         <ul>
           <li><a href="/">Home</a></li>
           <li><a href="/new">New Book</a></li>
         </ul>
       </div>



        <h2 style={style}>Book List</h2>
        <button onClick={this.toggoleBooks} className='button-primary'>
          Toggole Books
        </button>

        {newBookDetails}

        <NewBook />
      </div>
    );
  }
}

export default MainComponent;
