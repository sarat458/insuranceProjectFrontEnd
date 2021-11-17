import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import NavbarUser from './NavbarUser'

const baseURL = "http://localhost:8000/user"
export default class monthlyPremium extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentType: '',
            paymentAmount: '',
            userID: '',
            policyNumber: '',
            isRedirect: false,
            isGoBack: false
        }
    }

    componentDidMount() {
        //console.log(this.props.policy);
        this.setState({
            policyNumber: localStorage.getItem('policyNumber'),
            paymentAmount: localStorage.getItem('premiumPerMonth'),
            userID: localStorage.getItem('userID')
        })
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    makePayment = (e) => {
        console.log(this.state);
        const paymentDetails = {
            userID: this.state.userID,
            paymentType: this.state.paymentType,
            paymentAmount: this.state.paymentAmount,
            policyNumber: this.state.policyNumber
        }

        axios.post(`${baseURL}/makePayment`, paymentDetails)
            .then(res => {
                if (res.data.affectedRows == 1) {
                    this.setState({
                        isRedirect: true
                    })
                }
            })
            .catch(err => console.log(err))
    }

    cancelPayment = (e) => {
        this.setState({
            isGoBack: true
        })
    }

    render() {
        //console.log("render", this.props.policy);
        if (this.state.isRedirect || this.state.isGoBack) {
            return (
                <Redirect to='/user' />
            )
        }

        return (
            <React.Fragment>
                <NavbarUser />

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <span className="anchor" id="formUserEdit" />
                        <hr className="my-5" />
                        {/*form user info*/}
                        <div className="card card-outline-secondary">
                            <div className="card-header">
                                <h3 className="mb-0"> Monthly Premium Payment</h3>
                            </div>
                            <div className="card-body">
                                <form autoComplete="off" className="form" role="form">
                                    <div className="form-group row pt-2">
                                        <label className="col-lg-3 col-form-label form-control-label">Policy Number</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="policyNumber" disabled value={this.state.policyNumber} />
                                        </div>
                                    </div>
                                    <div className="form-group row pt-2">
                                        <label className="col-lg-3 col-form-label form-control-label">Payment Amount</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="paymentAmount" disabled value={`$${this.state.paymentAmount}`} />
                                        </div>
                                    </div>

                                    <div class="dropdown my-2">
                                        <label className="col-lg-3 col-form-label form-control-label p-1">Payment Type</label>
                                        <select className="mx-2" name="paymentType" onChange={this.handleChange} required>
                                            <option>Select Payment Type</option>
                                            <option>credit-card</option>
                                            <option>debit-card</option>
                                        </select>
                                    </div>
                                    <div className="form-group row pt-2">
                                        <label className="col-lg-3 col-form-label form-control-label" />
                                        <div className="col-lg-9">
                                            <input className="btn btn-dark mx-5" type="reset" onClick={this.cancelPayment} value="Cancel" />
                                            <input className="btn btn-success mx-5" type="button" onClick={this.makePayment} defaultValue="Pay" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>{/* /form user info*/}
                    </div>
                </div>

            </React.Fragment>

        )
    }
}
