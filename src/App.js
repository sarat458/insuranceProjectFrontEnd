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
import BuyPolicy from './BuyPolicy';
import ViewPolicies from './viewPolicies'
import Claims from './ViewClaims'
import Policies from './Policies';
import Profile from './Profile';
import RaiseClaim from './RaiseClaim';
import PolicyDetails from './PolicyDetails';
import PaymentSucess from './PaymentSucess';
import Company from './Company';
import monthlyPremium from './monthlyPremium';
import NotFound from './NotFound';
import claimStatus from './claimStatus';
import CompanyDashboard from './CompanyDashboard';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/agentLogin" component={AgentLogin} />
                <Route path="/user" component={User} />
                <Route path="/buyPolicy" component={BuyPolicy} />
                <Route path="/viewPolicy" component={ViewPolicies} />
                <Route path="/claims" component={Claims} />
                <Route path="/policies" component={Policies} />
                <Route path="/profile" component={Profile} />
                <Route path="/raiseClaim" component={RaiseClaim} />
                <Route path="/policyDetails" component={PolicyDetails} />
                <Route path="/paymentSucess" component={PaymentSucess} />
                <Route path="/companyLogin" component={Company} />
                <Route path="/payMonthlyPremium" component={monthlyPremium} />
                <Route path="/claimStatus" component={claimStatus} />
                <Route path='/companyDashboard' component={CompanyDashboard} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App

