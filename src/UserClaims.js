import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const baseURL = "http://localhost:8000/user"
export default class UserClaims extends Component {
    constructor() {
        super();
        this.state = {
            claimData: [],
            isLogged: localStorage.getItem('isLogged') != null && localStorage.getItem('isLogged'),
            isClaims: false,
            isRedirect: false
        }
    }

    componentDidMount() {
        console.log(this.state.isLogged)
        const userDetails = {
            userID: localStorage.getItem('userID')
        }
        axios.post(`${baseURL}/viewClaimStatus`, userDetails)
            .then(res => {
                console.log(res.data)
                if (res.data.isClaims) {
                    console.log(res.data);
                    this.setState({
                        claimData: res.data.claimDetails
                    })
                    //console.log(this.state)
                }
            })
            .catch(err => console.log(err))
    }

    claimDetails = (e) => {
        e.preventDefault()
        console.log(e.target.outerText);
        localStorage.setItem('policyNumber', e.target.outerText)
        this.setState({
            isRedirect: true
        })
    }

    claimTable = () => {
        let row = [];
        let id = 1;
        console.log(this.state.claimData[0]);
        if (this.state.claimData !== undefined && this.state.claimData.length) {
            this.state.claimData[0].map(claim => {
                row.push(
                    <tr>
                        <td name="id">{id++}</td>
                        <td name="insuranceType">
                            <Link className="nav-link" id={claim.policy_number} onClick={(e) => { this.claimDetails(e) }}>{claim.policy_number}
                            </Link>
                        </td>
                        <td name="premiumPerMonth">{claim.company_id}</td>
                        <td name="companyName">{claim.c_raised_date}</td>
                        <td name="companyName">{claim.c_type}</td>
                        <td name="companyName">{claim.c_status}</td>
                    </tr>
                )
            })
        } else {
            row.push(
                <h5 className="mt-2">No Claims raised</h5>

            )
        }

        return row;
    }

    render() {
        console.log(this.state);
        if (!this.state.isLogged) {
            return (
                <Redirect to='/' />
            )
        }
        if (this.state.isRedirect) {
            return (
                <Redirect to='/claimStatus' />
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
