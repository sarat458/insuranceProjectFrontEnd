import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import RegisterUser from './RegisterUser'

export default class Register extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <RegisterUser />
            </div>
        )
    }
}
