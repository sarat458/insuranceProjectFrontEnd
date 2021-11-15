import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';

const baseURL = "http://localhost:8000/user"
export default class viewPolicies extends Component {
    constructor() {
        super();
        this.state = {
            policyData: [],
            isLogged: localStorage.getItem('isLogged'),
            isPurchase: false
        }
    }

    componentDidMount() {
        console.log(this.state.isLogged)
        const userDetails = {
            userID: localStorage.getItem('userID')
        }
        axios.post(`${baseURL}/policies`, userDetails)
            .then(res => {
                if (res.data.length > 0) {
                    //console.log(res.data[0]);
                    let id = 1;
                    res.data.map(policy => {
                        policy["id"] = id++;
                    })
                    this.setState({
                        policyData: res.data
                    })
                    //console.log(this.state)
                }
            })
            .catch(err => console.log(err))
    }

    policyTable = () => {
        let row = [];
        this.state.policyData.map(policy => {
            row.push(
                <tr>
                    <td name="id">{policy.id}</td>
                    <td name="insuranceType">{policy.insuranceType}</td>
                    <td name="premiumPerMonth">{policy.premiumPerMonth}</td>
                    <td name="companyName">{policy.companyName}</td>
                    <td className="buttons">
                        <button className="btn btn-success btn-outline-light d-block w-100" type="submit" id={policy.id} onClick={(e) => this.buyPolicy(e)}>Purchase</button></td>
                </tr>
            )
        })

        return row;
    }

    buyPolicy = (e) => {
        const { id } = e.target;
        //console.log(id, this.state.policyData);
        let policy = this.state.policyData.filter(policy => policy.id == id)[0];
        //console.log(policy);
        localStorage.setItem('insuranceType', policy.insuranceType);
        localStorage.setItem('premiumPerMonth', policy.premiumPerMonth);
        localStorage.setItem('companyName', policy.companyName);
        this.setState({ isPurchase: true });

    }


    render() {
        if (this.state.isPurchase) {
            return <Redirect to='/buyPolicy' />
        }
        return (

            <div className="mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Insurance Type</th>
                            <th scope="col">Premium Per month</th>
                            <th scope="col">Company Name</th>
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
