import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'

export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            success: false
        }
    }

    submitFunc = () => {
        this.setState({ success: true })
    }


    render() {
        if (this.state.success) {
            return (
                <Redirect to="/login" />
            )
        }
        return (
            <div>
                <Navbar />
                <h1>register form</h1>
                <button type="submit" onClick={this.submitFunc}>submit</button>
                <Footer />
            </div>
        )
    }
}
