import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';

const baseURL = "http://localhost:8000/user"
export default class Userdashboard extends Component {
    constructor() {
        super();
        this.state = {
            policyData: [],
            isLogged: localStorage.getItem('isLogged')
        }
    }

    componentDidMount() {
        console.log(this.state.isLogged)
        const userDetails = {
            userID: localStorage.getItem('userID')
        }
        axios.post(`${baseURL}/getUserPolicies`, userDetails)
            .then(res => {
                if (res.data.length > 0) {
                    //console.log(res.data[0]);
                    this.setState({
                        policyData: res.data
                    })
                    //console.log(this.state)
                }
            })
            .catch(err => console.log(err))
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
            })
            .catch(err => console.log(err))
    }

    policyTable = () => {
        let row = [];
        this.state.policyData.map(policy => {
            row.push(
                <tr>
                    <td>{policy.policyNumber}</td>
                    <td>{policy.insuranceType}</td>
                    <td>{policy.startDate}</td>
                    <td>{`$${policy.premiumPerMonth}`}</td>
                    <td>{policy.companyName}</td>
                    <td>{policy.duration}</td>
                    <td className="buttons">
                        <button className="btn btn-danger btn-outline-light d-block w-100" type="submit" id={policy.policyNumber} onClick={(e) => { this.deletePolicy(e) }}>Cancel</button></td>
                </tr>
            )
        })

        return row;
    }

    logout = () => {
        localStorage.setItem('isLogged', 'false');
        this.setState({
            isLogged: false
        })
    }

    render() {
        console.log(this.state.isLogged);
        if (!this.state.isLogged) {
            return (
                <Redirect to='/' />
            )
        }
        console.log(this.state.isLogged);
        return (

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
                        </tr>
                    </thead>
                    <tbody>
                        {this.policyTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
