import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const baseURL = "http://localhost:8000/user"
export default class Userdashboard extends Component {
    constructor() {
        super();
        this.state = {
            policyData: [],
            isLogged: localStorage.getItem('isLogged'),
            totalPremium: '',
            nextDueDate: '',
            policyNumber: '',
            isRedirectToPayment: false
        }
    }


    componentDidMount() {

        const userDetails = {
            userID: localStorage.getItem('userID')
        }

        axios.post(`${baseURL}/getUserPolicies`, userDetails)
            .then(res => {
                console.log("Results", res)
                if (res.data) {
                    this.setState({
                        policyData: res.data
                    })
                    //console.log(this.state)
                }
            })
            .catch(err => console.log(err))




        this.premiumUpdate();
        this.dueDateUpdate();



    }

    dueDateUpdate = () => {
        const userDetails = {
            userID: localStorage.getItem('userID')
        }
        axios.post(`${baseURL}/nextDueDate`, userDetails)
            .then(res => {
                console.log(res.data[0]);
                this.setState({
                    nextDueDate: res.data[0],
                    policyNumber: res.data[1]
                })
            })
    }

    premiumUpdate = () => {
        const userDetails = {
            userID: localStorage.getItem('userID')
        }
        axios.post(`${baseURL}/totalMonthlyPremium`, userDetails)
            .then(res => {
                console.log(res);
                this.setState({
                    totalPremium: res.data[0].totalPremium
                })
            })
    }


    premiumPayment = (e) => {
        e.preventDefault();
        this.setState({
            isRedirectToPayment: true,
        })

    }

    deletePolicy = (e) => {
        e.preventDefault();
        console.log(this.state);
        const userDetails = {
            userID: localStorage.getItem('userID'),
            policyNumber: e.target.id
        }
        axios.post(`${baseURL}/cancelPolicy`, userDetails)
            .then(res => {
                let newPolicyData = this.state.policyData.filter(policy => policy.policyNumber != e.target.id);
                this.setState({ policyData: newPolicyData });
                this.premiumUpdate();
            })
            .catch(err => console.log(err))
    }

    policyDetails = (e) => {
        const policyNumber = e.target.outerText;
        console.log(policyNumber);
        localStorage.setItem('policyNumber', `${policyNumber}`);
    }



    policyTable = () => {
        let row = [];
        console.log(this.state.policyData);
        if (this.state.policyData !== "no policies enrolled") {
            this.state.policyData.map(policy => {
                row.push(
                    <tr key={policy.policyNumber}>
                        <td><Link className="nav-link" to="/policyDetails" id={policy.policyNumber} onClick={(e) => { this.policyDetails(e) }}>{policy.policyNumber}</Link></td>
                        <td>{policy.insuranceType}</td>
                        <td>{policy.startDate}</td>
                        <td>{`$${policy.premiumPerMonth}`}</td>
                        <td>{policy.companyName}</td>
                        <td>{policy.duration}</td>
                        <td className="buttons"><button className="btn btn-success btn-outline-light d-block w-100" type="submit" id={policy.policyNumber} onClick={(e) => { this.premiumPayment(e) }}>Pay</button></td>
                        <td className="buttons">
                            {/*<button className="btn btn-danger btn-outline-light d-block w-100" type="submit" id={policy.policyNumber} onClick={(e) => { this.deletePolicy(e) }}>Cancel</button>*/}
                            <button className="btn btn-danger btn-outline-light d-block w-100" data-toggle="modal" data-target="#exampleModal" id={policy.policyNumber}>Cancel Policy</button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Do you want to cancel?</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true"> &times; </span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Policy: {policy.policyNumber}
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                            <button className="btn btn-danger btn-outline-light" type="submit" id={policy.policyNumber} onClick={(e) => { this.deletePolicy(e) }} data-dismiss="modal">Yes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>



                )
            })
            return row;
        } else {
            return (
                <h4>No policies enrolled</h4>
            )
        }

    }

    logout = () => {
        localStorage.setItem('isLogged', 'false');
        this.setState({
            isLogged: false
        })
    }

    render() {
        console.log("check" + this.state.isLogged);
        console.log("Local ", localStorage);
        console.log(localStorage.getItem('isLogged'));
        if (!localStorage.getItem('isLogged')) {
            return (
                <Redirect to='/' />
            )
        }
        console.log(this.isRedirectToPayment);
        if (this.state.isRedirectToPayment) {
            return (
                <Redirect to='/payMonthlyPremium' />
            )
        }
        console.log(this.state.isLogged);
        return (
            <React.Fragment>

                <div className="row">
                    <div className="mt-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Policy Number</th>
                                    <th scope="col">Insurance Type</th>
                                    <th scope="col">start date</th>
                                    <th scope="col">Premium Per month</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Duration (months)</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.policyTable()}
                            </tbody>
                        </table>

                    </div>
                </div>
                <br />
                <div className="row mt-5">
                    <div className="col">
                        <div className="card p-4" style={{ width: '18rem', height: '184.4px' }}>
                            <div className="card-body">
                                <h3 className="card-title">Total Premium</h3>
                                <h6 className="card-subtitle mb-2 text-muted mx-5">(per month)</h6>
                                <h1 className="text-success mx-4">{`$${this.state.totalPremium}`}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card p-4" style={{ width: '18rem', height: '184.4px' }}>
                            <div className="card-body">
                                <h3 className="card-title mx-auto">Next Due</h3>
                                <h6 className="card-subtitle mb-2 text-muted">{this.state.policyNumber}</h6>
                                <h3 className="mx-auto text-danger">{this.state.nextDueDate}</h3>

                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card p-4" style={{ width: '20rem', minHeight: '184.4px' }}>
                            <div className="card-body">
                                <h3 className="card-title">Overdue policies</h3>
                                <ul>
                                    <li>65468464</li>
                                    <li>35468684</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
