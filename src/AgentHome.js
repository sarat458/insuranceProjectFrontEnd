import React, { Component } from 'react'
import AgentDashboard from './AgentDashboard'
import AgentNav from './AgentNav'

export default class AgentHome extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <AgentNav />
                </div>
                <div className="row">
                    <AgentDashboard />
                </div>
            </React.Fragment>
        )
    }
}
