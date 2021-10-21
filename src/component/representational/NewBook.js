import React, { Component } from 'react';

class NewBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookName: '',
      authorName: '',
      description: '',
    };

    this.inputHandellerChange = this.inputHandellerChange.bind(this);
    this.submitHandeller = this.submitHandeller.bind(this);
  }

  inputHandellerChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  submitHandeller = (e) => {
    console.log(this.state);

    e.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <br />
        <h1>New Book Entry</h1>
        <hr />
        <br />

        <form onSubmit={this.submitHandeller}>
          <div className='row'>
            <div className='six columns'>
              <label for='book'>
                <h5>Book Name:</h5>
              </label>
              <input
                id='book'
                type='text'
                name='bookName'
                value={this.state.bookName}
                className='u-full-width'
                onChange={this.inputHandellerChange}
              ></input>
            </div>
            <div className='six columns'>
              <label for='author'>
                <h5>Author Name:</h5>
              </label>
              <input
                id='author'
                type='text'
                name='authorName'
                value={this.state.authorName}
                className='u-full-width'
                onChange={this.inputHandellerChange}
              ></input>
            </div>
            <br />
            <br />
            <br />
            <br />
            <label for='des'>
              <h5>Description:</h5>
            </label>
            <textarea
              name='description'
              value={this.state.description}
              id='des'
              className='u-full-width'
              onChange={this.inputHandellerChange}
            ></textarea>
            <br />
            <input type='submit' className='button-primary' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default NewBook;
