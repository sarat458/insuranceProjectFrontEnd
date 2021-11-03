import React, { Component } from 'react'
import Footer from './Footer'
import LoginForm from './LoginForm'
import Navbar from './Navbar'

export default class AgentLogin extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1 className='pt-3' style={{ textAlign: 'center' }}>Agent Login</h1>
                <LoginForm />
                <Footer />
            </div>
        )
    }
}