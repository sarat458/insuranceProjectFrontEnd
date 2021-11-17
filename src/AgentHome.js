import React, { Component } from 'react'
import AgentDashboard from './AgentDashboard'
import AgentLoginForm from './AgentLoginForm'
import AgentNav from './AgentNav'

export default class AgentHome extends Component {
    render() {
        return (
            <React.Fragment>
                <AgentNav />
                <AgentDashboard />
            </React.Fragment>
        )
    }
}
