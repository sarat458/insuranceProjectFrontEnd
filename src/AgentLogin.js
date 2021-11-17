import React, { Component } from 'react'
import AgentLoginForm from './AgentLoginForm';

import Navbar from './Navbar'

export default class AgentLogin extends Component {
    render() {
        const name = "Agent Login";
        return (
            <div>
                <Navbar />
                <AgentLoginForm />
            </div>
        )
    }
}