import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';

const baseURL = "http://localhost:8000/user"
export default class UserClaims extends Component {
    constructor() {
        super();
        this.state = {
            claimData: [],
            isLogged: localStorage.getItem('isLogged') != null && localStorage.getItem('isLogged'),
        }
    }

    componentDidMount() {
        console.log(this.state.isLogged)
        const userDetails = {
            userID: localStorage.getItem('userID')
        }
        axios.post(`${baseURL}/viewClaimStatus`, userDetails)
            .then(res => {
                if (res.data.length > 0) {
                    console.log(res.data[0][0]);
                    this.setState({
                        claimData: res.data[0]
                    })
                    //console.log(this.state)
                }
            })
            .catch(err => console.log(err))
    }

    claimTable = () => {
        let row = [];
        let id = 1;
        this.state.claimData.map(claim => {
            row.push(
                <tr>
                    <td name="id">{id++}</td>
                    <td name="insuranceType">{claim.policy_number}</td>
                    <td name="premiumPerMonth">{claim.company_id}</td>
                    <td name="companyName">{claim.c_raised_date.toLocaleString('en-US')}</td>
                    <td name="companyName">{claim.c_type}</td>
                    <td name="companyName">{claim.c_status}</td>
                </tr>
            )
        })

        return row;
    }

    render() {
        console.log(this.state);
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
                            <th scope="col">#</th>
                            <th scope="col">Policy Number</th>
                            <th scope="col">Company ID</th>
                            <th scope="col">Raised Date</th>
                            <th scope="col">Calim Type</th>
                            <th scope="col">Claim Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.claimTable()}
                    </tbody>
                </table>
            </div>


        )
    }
}
