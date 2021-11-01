import React from 'react';
import ReactDOM from 'react-dom';
import Books from './Books';
import Login from './Login';
import Home from './Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { render } from '@testing-library/react';




function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Books" component={Books} />
                <Route path="/Login" component={Login} />
            </Switch>
        </Router>
    )
}

export default App

