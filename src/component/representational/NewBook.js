import React, { Component, createRef } from 'react';

class NewBook extends Component {
  constructor(props) {
    super(props);

    this.bName = createRef();
    this.aName = createRef();
    this.des = createRef();

    this.submitHandeller = this.submitHandeller.bind(this);
  }

  submitHandeller = (e) => {
    console.log(this.bName.current.value);
    console.log(this.aName.current.value);
    console.log(this.des.current.value);

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
                className='u-full-width'
                ref={this.bName}
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
                className='u-full-width'
                ref={this.aName}
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
              id='des'
              className='u-full-width'
              ref={this.des}
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
