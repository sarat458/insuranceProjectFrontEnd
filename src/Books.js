import React from 'react';

import axios from 'axios';

const baseURL = "http://localhost:8000"
export default class Books extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios.get(`${baseURL}/books`)
      .then(res => {
        const books = res.data;
        console.log(books)
        this.setState({ books });
      })
  }

  render() {
    return (
      <ul>
        {this.state.books.map(book => <li>{book}</li>)}
      </ul>
    )
  }
}
