import axios from 'axios';
import React, { Component } from 'react'

const baseURL = "http://localhost:8000/user"
export default class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            title: '',
            author_fname: '',
            author_lname: '',
            released_year: '',
            stock_quantity: '',
            pages: ''
        }
    }

    updateHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state);
        axios
            .post(`${baseURL}/addBook`, this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        const { title, author_fname, author_lname, released_year, stock_quantity, pages } = this.state
        return (
            <div>
                <form action="" method="get" class="form-example" onSubmit={this.submitHandler}>
                    <div class="form-example">
                        <label for="title">Title </label>
                        <input type="text" name="title" id="title" value={title} onChange={this.updateHandler} required />
                    </div>
                    <div class="form-example">
                        <label for="author_fname">Author fname</label>
                        <input type="text" name="author_fname" id="author_fname" value={author_fname} onChange={this.updateHandler} required />
                    </div>
                    <div class="form-example">
                        <label for="author_lname">Author lname</label>
                        <input type="text" name="author_lname" id="author_lname" value={author_lname} onChange={this.updateHandler} required />
                    </div>
                    <div class="form-example">
                        <label for="released_year">Year</label>
                        <input type="number" name="released_year" id="released_year" value={released_year} onChange={this.updateHandler} required />
                    </div>
                    <div class="form-example">
                        <label for="stock_quantity">Stock</label>
                        <input type="number" name="stock_quantity" id="stock_quantity" value={stock_quantity} onChange={this.updateHandler} required />
                    </div>
                    <div class="form-example">
                        <label for="pages">Pages</label>
                        <input type="number" name="pages" id="pages" value={pages} onChange={this.updateHandler} required />
                    </div>

                    <div class="form-example">
                        <input type="submit" value="Update" />
                    </div>
                </form>
            </div>
        )
    }
}
