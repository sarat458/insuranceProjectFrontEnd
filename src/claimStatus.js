import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NavbarUser from './NavbarUser'
import './status.css'

const baseURL = "http://localhost:8000/user"
export default class claimStatus extends Component {
    constructor() {
        super()
        this.state = {
            status: 'Raised',
            policyNumber: '',
            isRedirect: false
        }
    }

    componentDidMount() {
        const claimDetails = {
            userID: localStorage.getItem('userID'),
            policyNumber: localStorage.getItem('policyNumber')
        }
        axios.post(`${baseURL}/viewCustomerClaimStatusForPolicy`, claimDetails)
            .then(res => {
                console.log(res.data[0])
                this.setState({
                    status: res.data[0].claimStatus
                })
            })
            .catch(err => console.log(err))


        this.setState({
            policyNumber: localStorage.getItem('policyNumber')
        })
    }

    redirectFunction = (e) => {
        e.preventDefault()
        this.setState({
            isRedirect: true
        })
    }

    render() {

        if (this.state.isRedirect) {
            return (
                <Redirect to='/claims' />
            )
        }

        const trackClaimStatus = () => {
            if (this.state.status == 'Approved') {
                return (
                    <React.Fragment>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bg-white p-2 border rounded px-3">
                                        <div className="d-flex flex-row justify-content-between align-items-center order">
                                            <div className="d-flex flex-column order-details"><span>YOUR CLAIM STATUS</span><span className="date">{this.state.policyNumber}</span></div>
                                        </div>
                                        <hr className="divider mb-4" />
                                        <div className="d-flex flex-row justify-content-between align-items-center align-content-center"><span className="dot" />
                                            <hr className="flex-fill track-line" /><span className="dot" />
                                            <hr className="flex-fill track-line" /><span className="d-flex justify-content-center align-items-center big-dot dot"><i className="fa fa-check text-white mx-1" /></span></div>
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <div className="d-flex flex-column justify-content-center align-items-center"><span>Claim Raised</span></div>
                                            <div className="d-flex flex-column align-items-center"><span>Under Review</span></div>
                                            <div className="d-flex flex-column align-items-end"><span>Accepted</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <br />
                            <button className="btn btn-primary" type="submit" onClick={(e) => { this.redirectFunction(e) }}>Back to Dashboard</button>
                            <br />
                        </div>
                    </React.Fragment>
                )
            } else if (this.state.status === 'Rejected') {
                return (
                    <React.Fragment>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bg-white p-2 border rounded px-3">
                                        <div className="d-flex flex-row justify-content-between align-items-center order">
                                            <div className="d-flex flex-column order-details"><span>YOUR CLAIM STATUS</span><span className="date">{this.state.policyNumber}</span></div>
                                        </div>
                                        <hr className="divider mb-4" />
                                        <div className="d-flex flex-row justify-content-between align-items-center align-content-center"><span className="dot bg-danger" />
                                            <hr className="flex-fill track-line bg-danger" /><span className="dot bg-danger" />
                                            <hr className="flex-fill track-line bg-danger" /><span className="d-flex justify-content-center align-items-center big-dot dot bg-danger"><i className="fa fa-times text-white mx-1" /></span></div>
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <div className="d-flex flex-column justify-content-center align-items-center"><span>Claim placed</span></div>
                                            <div className="d-flex flex-column align-items-center"><span>Under Review</span></div>
                                            <div className="d-flex flex-column align-items-end"><span>Declined</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <br />
                            <button className="btn btn-primary" type="submit" onClick={(e) => { this.redirectFunction(e) }}>Back to Dashboard</button>
                            <br />
                        </div>
                    </React.Fragment>
                )
            } else if (this.state.status === 'Pending Review') {
                return (
                    <React.Fragment>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bg-white p-2 border rounded px-3">
                                        <div className="d-flex flex-row justify-content-between align-items-center order">
                                            <div className="d-flex flex-column order-details"><span>YOUR CLAIM STATUS</span><span className="date">{this.state.policyNumber}</span></div>
                                        </div>
                                        <hr className="divider mb-4" />
                                        <div className="d-flex flex-row justify-content-between align-items-center align-content-center"><span className="dot" />
                                            <hr className="flex-fill track-line" /><span className="d-flex justify-content-center align-items-center big-dot dot"><i className="fa fa-check text-white mx-1" /></span>
                                            <hr className="flex-fill" /></div>
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <div className="d-flex flex-column justify-content-center align-items-center"><span>Claim placed</span></div>
                                            <div className="d-flex flex-column align-items-center"><span>Under Review</span></div>
                                            <div className="d-flex flex-column align-items-end"><span>Accepted/Declined</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <br />
                            <button className="btn btn-primary" type="submit" onClick={(e) => { this.redirectFunction(e) }}>Back to Dashboard</button>
                            <br />
                        </div>
                    </React.Fragment>
                )
            } else {
                return (
                    <React.Fragment>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bg-white p-2 border rounded px-3">
                                        <div className="d-flex flex-row justify-content-between align-items-center order">
                                            <div className="d-flex flex-column order-details"><span>YOUR CLAIM STATUS</span><span className="date">{this.state.policyNumber}</span></div>
                                        </div>
                                        <hr className="divider mb-4" />
                                        <div className="d-flex flex-row justify-content-between align-items-center align-content-center"><span className="d-flex justify-content-center align-items-center big-dot dot"><i className="fa fa-check text-white mx-1" /></span>
                                            <hr className="flex-fill" />
                                            <hr className="flex-fill" /></div>
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <div className="d-flex flex-column justify-content-center align-items-center"><span>Claim placed</span></div>
                                            <div className="d-flex flex-column align-items-center"><span>Under Review</span></div>
                                            <div className="d-flex flex-column align-items-end"><span>Accepted/Declined</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <br />
                            <button className="btn btn-primary" type="submit" onClick={(e) => { this.redirectFunction(e) }}>Back to Dashboard</button>
                            <br />
                        </div>
                    </React.Fragment>
                )
            }
        }



        return (
            <React.Fragment>
                <NavbarUser />
                <div>
                    {trackClaimStatus()}
                </div>

            </React.Fragment>
        )
    }
}
