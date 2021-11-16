import React, { Component } from 'react'
import Footer from './Footer'

import LoginForm from './LoginForm'
import Navbar from './Navbar'
export default class login extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <LoginForm />
            </div>
        )
    }
}
