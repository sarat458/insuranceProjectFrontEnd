import axios from 'axios';
import React, { Component } from 'react'
import CompanyNavbar from './CompanyNavbar'

const baseURL = "http://localhost:8000/company"
export default class CompanyDashboard extends Component {
    constructor() {
        super();
        this.state = {
            claimsData: [],
            policyNumber: '',
            policyType: '',
            claimStatus: '',
            claimID: '',
            isRedirect: ''
        }
    }

    componentDidMount() {
        this.fetchClaimDetails()
    }

    fetchClaimDetails = () => {
        const companyID = localStorage.getItem('companyID');
        axios.post(`${baseURL}/viewClaims`, { companyID })
            .then(res => {
                // console.log(typeof (res.data));
                console.log(res.data[0]);
                this.setState({
                    claimsData: res.data
                })
            })
    }

    updateClaimStatus = (e) => {
        e.preventDefault();
    }

    handleStatusChage = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        console.log(e.target.id);
        // this.setState({
        //     claimStatus: e.target.value,
        //     claimID: e.target.id
        // })
        localStorage.setItem('claimID', e.target.id);
        localStorage.setItem('claimStatus', e.target.value);

        this.changeClaimStatus()
    }

    changeClaimStatus = () => {
        // e.preventDefault();
        const changeDetails = {
            claimID: localStorage.getItem('claimID'),
            claimStatus: localStorage.getItem('claimStatus')
        }

        console.log(changeDetails);
        axios.post(`${baseURL}/changeClaimStatus`, changeDetails)
            .then(res => {
                console.log(res.data);
                this.setState({
                    isRedirect: true
                })
            })
            .catch(err => console.log(err))


        window.location.reload();
    }

    // policyDetails = (e) => {
    //     const policyNumber = e.target.getAttribute('data-item');
    //     console.log(e.target.getAttribute('data-item'));
    //     // this.setState({
    //     //     policyNumber: e.target.value
    //     // })
    // }
    //this.state.claimData !== undefined && this.state.claimData.length

    claimsTable = () => {
        let row = [];
        let id = 1;
        console.log(this.state.claimsData)
        if (this.state.claimsData !== undefined && this.state.claimsData.length) {
            this.state.claimsData.map((claim) => {
                // console.log(typeof (claim));
                // console.log(claim.policyNumber);
                if (claim.claimStatus != 'Approved' && claim.claimStatus != 'Rejected') {
                    row.push(
                        <tr key={claim.claimID}>
                            <th scope="row">{id++}</th>
                            <td>{claim.policyNumber}</td>
                            <td>{claim.claimType}</td>
                            <td className="text-wrap">{claim.c_comments}</td>
                            <td>{claim.claimStatus}</td>
                            <td>
                                {/** <div className="dropdown show" >
                                <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Action
                                </a>
                                
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" name="claimStatus" onChange={this.handleStatusChage}>
                                    <a class="dropdown-item" data-toggle="modal" data-target="#exampleModal" href="#">Pending Review</a>
                                    <a class="dropdown-item" href="#">Approved</a>
                                    <a class="dropdown-item" href="#">Rejected</a>
                                </div>
                            </div>

                            <div class="dropdown show" onChange={(e) => { this.handleStatusChage(e) }}>
                                <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Action
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" data-toggle="modal" data-target="#exampleModal" href="#">Pending Review</a>
                                    <a class="dropdown-item" href="#">Approved</a>
                                    <a class="dropdown-item" href="#">Rejected</a>
                                </div>
                        </div>*/}
                                <select className=" btn btn-primary mx-2" name="claimStatus" id={claim.claimID} onChange={this.handleStatusChage}>
                                    <option>Change Status</option>
                                    <option>Pending Review</option>
                                    <option>Approved</option>
                                    <option>Rejected</option>
                                </select>
                            </td>
                        </tr >
                    )
                }
            })
        } else {
            row.push(
                <h4>No Claims</h4>
            )
        }


        return row;
    }




    render() {
        return (
            <React.Fragment>
                <CompanyNavbar />
                <div className="container mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Policy Number</th>
                                <th scope="col">Policy Type</th>
                                <th scope="col">Comments</th>
                                <th scope="col">Status</th>
                                <th scope="col">Change Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.claimsTable()}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
