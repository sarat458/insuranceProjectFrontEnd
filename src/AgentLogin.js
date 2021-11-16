import React, { Component } from 'react'
import Footer from './Footer'
import LoginForm from './LoginForm'
import Navbar from './Navbar'

export default class AgentLogin extends Component {
    render() {
        const name = "Agent Login";
        return (
            <div>
                <Navbar />
                <LoginForm name={name} />
            </div>
        )
    }
}