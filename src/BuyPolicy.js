import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';

const baseURL = "http://localhost:8000/user"
export default class BuyPolicy extends Component {
    constructor() {
        super();
        this.state = {
            userID: '',
            agentID: '',
            companyID: '',
            companyName: '',
            insuranceID: '',
            insuranceType: '',
            paymentAmount: '',
            nomineeFname: '',
            mobileNumber: '',
            duration: null,
            paymentType: null,
            isPaymentSucess: false,
            isCancel: false
        }
    }

    componentDidMount() {
        const getDetailsForPolicyPurchase = {
            companyName: localStorage.getItem('companyName'),
            insuranceType: localStorage.getItem('insuranceType')
        }

        axios.post(`${baseURL}/getDetailsForPolicyPurchase`, getDetailsForPolicyPurchase)
            .then(res => {
                // console.log(res.data[0]);
                // console.log(res.data[0][0].companyID);
                this.setState({
                    agentID: res.data[0][0].agentID,
                    companyID: res.data[0][0].companyID,
                    insuranceID: res.data[1][0].insuranceID
                })
            })
            .catch(err => {
                console.log(err);
            })
        this.setState({
            userID: localStorage.getItem('userID'),
            insuranceType: localStorage.getItem('insuranceType'),
            paymentAmount: localStorage.getItem('premiumPerMonth'),
            companyName: localStorage.getItem('companyName')
        })
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    cancelPurchase = (e) => {
        this.setState({
            isCancel: true
        })
    }

    makePayment = (e) => {
        e.preventDefault()
        console.log(this.state)

        const purchaseDetails = {
            userID: this.state.userID,
            agentID: this.state.agentID,
            companyID: this.state.companyID,
            insuranceID: this.state.insuranceID,
            paymentType: this.state.paymentType,
            paymentAmount: this.state.paymentAmount,
            nomineeFname: this.state.nomineeFname,
            mobileNumber: this.state.mobileNumber,
            duration: this.state.duration
        }
        axios.post(`${baseURL}/buyPolicy`, purchaseDetails)
            .then(res => {
                if (res.data) {
                    this.setState({ isPaymentSucess: true })
                }
            })
            .catch(err => console.log(err))
    }
    render() {

        const { nomineeFname, mobileNumber } = this.state;
        if (this.state.isPaymentSucess) {
            return (
                <Redirect to='/user' />
            )
        }

        if (this.state.isCancel) {
            return (
                <Redirect to='/policies' />
            )
        }
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <span className="anchor" id="formUserEdit" />
                    <hr className="my-5" />
                    {/*form user info*/}
                    <div className="card card-outline-secondary">
                        <div className="card-header">
                            <h3 className="mb-0"> Purchase Policy</h3>
                        </div>
                        <div className="card-body">
                            <form autoComplete="off" className="form" role="form">
                                <div className="form-group row pt-2">
                                    <label className="col-lg-3 col-form-label form-control-label">Insurance Type</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" name="insuranceType" disabled value={this.state.insuranceType} />
                                    </div>
                                </div>
                                <div className="form-group row pt-2">
                                    <label className="col-lg-3 col-form-label form-control-label">Payment Amount</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" name="paymentAmount" disabled value={`$${this.state.paymentAmount}`} />
                                    </div>
                                </div>
                                <div className="form-group row pt-2">
                                    <label className="col-lg-3 col-form-label form-control-label">Company Name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" name="companyName" disabled value={this.state.companyName} />
                                    </div>
                                </div>
                                <div class="dropdown my-2">
                                    <label className="col-lg-3 col-form-label form-control-label">Duration</label>
                                    <select className="mx-2" name="duration" onChange={this.handleChange}>
                                        <option>Select duration</option>
                                        <option>6</option>
                                        <option>9</option>
                                        <option>12</option>
                                    </select>
                                </div>
                                <div className="form-group row pt-2">
                                    <label className="col-lg-3 col-form-label form-control-label">Nominee Full Name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" name="nomineeFname" value={nomineeFname} onChange={this.handleChange} required />
                                    </div>
                                </div>

                                <div className="form-group row pt-2">
                                    <label className="col-lg-3 col-form-label form-control-label">Mobile Number</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" name="mobileNumber" value={mobileNumber} onChange={this.handleChange} required />
                                    </div>
                                </div>

                                <div class="dropdown my-2">
                                    <label className="col-lg-3 col-form-label form-control-label p-1">Payment Type</label>
                                    <select className="mx-2" name="paymentType" onChange={this.handleChange}>
                                        <option>Select Payment Type</option>
                                        <option>credit-card</option>
                                        <option>debit-card</option>
                                    </select>
                                </div>
                                <div className="form-group row pt-2">
                                    <label className="col-lg-3 col-form-label form-control-label" />
                                    <div className="col-lg-9">
                                        <input className="btn btn-dark mx-5" type="reset" onClick={this.cancelPurchase} value="Cancel" />
                                        <input className="btn btn-success" type="button" onClick={this.makePayment} defaultValue="Make Payment" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>{/* /form user info*/}
                </div>
            </div>

        )
    }
}
