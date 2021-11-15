import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const baseURL = "http://localhost:8000/user"
export default class NavbarUser extends Component {
    constructor() {
        super();
        this.state = {
            policyData: [],
            isLogged: localStorage.getItem('isLogged')
        }
    }

    // componentDidMount() {
    //     console.log(this.state.isLogged)
    //     const userDetails = {
    //         userID: localStorage.getItem('userID')
    //     }
    //     axios.post(`${baseURL}/getUserPolicies`, userDetails)
    //         .then(res => {
    //             if (res.data.length > 0) {
    //                 //console.log(res.data[0]);
    //                 this.setState({
    //                     policyData: res.data
    //                 })
    //                 //console.log(this.state)
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }

    // deletePolicy = (e) => {
    //     e.preventDefault();
    //     console.log(this.state);
    //     const userDetails = {
    //         userID: localStorage.getItem('userID'),
    //         policyNumber: e.target.id
    //     }
    //     axios.post(`${baseURL}/cancelPolicy`, userDetails)
    //         .then(res => {
    //             let newPolicyData = this.state.policyData.filter(policy => policy.policyNumber != e.target.id);
    //             this.setState({ policyData: newPolicyData });
    //         })
    //         .catch(err => console.log(err))
    // }

    // policyTable = () => {
    //     let row = [];
    //     this.state.policyData.map(policy => {
    //         row.push(
    //             <tr>
    //                 <td>{policy.policyNumber}</td>
    //                 <td>{policy.insuranceType}</td>
    //                 <td>{policy.startDate}</td>
    //                 <td>{policy.premiumPerMonth}</td>
    //                 <td>{policy.companyName}</td>
    //                 <td>{policy.duration}</td>
    //                 <td className="buttons">
    //                     <button className="btn btn-danger btn-outline-light d-block w-100" type="submit" id={policy.policyNumber} onClick={(e) => { this.deletePolicy(e) }}>Cancel</button></td>
    //             </tr>
    //         )
    //     })

    //     return row;
    // }


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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">CalState Insurance</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/user" onClick={this.clickHandler}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/policies">Policies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/claims">Claims</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>

                        </ul>
                        <button className="btn btn-dark btn-outline-light" type="submit" onClick={this.logout} >Logout</button>
                    </div>
                </div>
            </nav>
        )
    }
}
