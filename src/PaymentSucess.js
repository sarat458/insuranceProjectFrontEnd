import React, { Component } from 'react'
import { Redirect } from 'react-router';
import NavbarUser from './NavbarUser';
import './paymentSucess.css'
export default class PaymentSucess extends Component {
    constructor() {
        super();
        this.state = {
            policyNumber: '',
            isRedirect: false
        }
    }



    handler = (e) => {
        this.setState({
            isRedirect: true
        })
    }


    render() {
        if (this.state.isRedirect) {
            return (
                <Redirect to="/user" />
            )
        }

        return (
            <div className="card" style={{ textAlign: 'center', width: 1000 }}>
                <div style={{ borderRadius: 200, height: 200, width: 200, background: '#F8FAF5', margin: '0 auto' }}>
                    <i className="checkmark">✓</i>
                </div>
                <h1>Congratulations</h1>
                <p>You have been successfully enrolled into the <h3>{this.state.policyNumber}</h3> policy<br />Click below to return to your dashboard
                    <br /><br /><button className="btn btn-primary" type="submit" onClick={this.handler}>Return Home</button></p>
            </div>


        )
    }
}
