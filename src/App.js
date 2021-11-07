import React from 'react';
//import ReactDOM from 'react-dom';
//import Books from './Books';
import Login from './Login';
import Home from './Home'
import AgentLogin from './AgentLogin';
import User from './User'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
//import { render } from '@testing-library/react';
import Register from './Register';




function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/agentLogin" component={AgentLogin} />
                <Route path="/user" component={User} />
            </Switch>
        </Router>
    )
}

export default App

