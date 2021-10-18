import { Component } from 'react';
import BookItem from '../assets/BookItem';
import BookList from './lists/BookList';
import NewBook from './representational/NewBook';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import BookDetails from './representational/BookDetails';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDetails: BookItem,
      selectBook: null,
    };
  }

  selectedBookHandler = (bookId) => {
    const book = this.state.bookDetails.filter((book) => book.id === bookId)[0];

    this.setState({
      selectBook: book,
    });
  };

  render() {
    const newBookDetails = (
      <BookList
        bookDetailsProps={this.state.bookDetails}
        selectedBookHandler={this.selectedBookHandler}
      />
    );

    return (
      <div className='App'>
        <nav className='nav-bar'>
          <ul>
            <li>
              <NavLink to='/' exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/new-book'>New Book</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/books' exact render={() => newBookDetails} />
          <Route path='/new-book' exact component={NewBook} />
          <Route
            path='/:id'
            render={() => <BookDetails book={this.state.selectBook} />}
          />

          <Redirect from='/' to='/books'></Redirect>
        </Switch>
      </div>
    );
  }
}

export default MainComponent;
