import axios from 'axios';
import React, { Component } from 'react'

const baseURL = "http://localhost:8000/user"
export default class UserProfile extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            customerType: '',
            gender: '',
            dob: '',
            ssn: ''
        }
    }

    componentDidMount() {
        const userID = {
            userID: localStorage.getItem('userID')
        }

        axios.post(`${baseURL}/getUserDetails`, userID)
            .then(res => {
                console.log(res.data);
                this.setState({
                    firstName: res.data[0].firstName,
                    middleName: res.data[0].middleName,
                    lastName: res.data[0].lastName,
                    email: res.data[0].email,
                    customerType: res.data[0].userType,
                    gender: res.data[0].gender,
                    dob: res.data[0].dob,
                    ssn: res.data[0].ssn
                });
                console.log(this.state);
            })
            .catch(err => console.log(err))

    }


    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <span className="anchor" id="formUserEdit" />
                        <hr className="my-5" />
                        <div className="card card-outline-secondary">
                            <div className="card-header">
                                <h3 className="mb-0"> User Profile</h3>
                            </div>
                            <div className="card-body">
                                <form autoComplete="off" className="form" role="form">
                                    <div className="form-group row pt-2">
                                        <label className="col-lg-3 col-form-label form-control-label">First Name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="firstName" disabled value={this.state.firstName} />
                                        </div>
                                    </div>
                                    <div className="form-group row pt-2">
                                        <label className="col-lg-3 col-form-label form-control-label">Middle Name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="middleName" disabled value={this.state.middleName} />
                                        </div>
                                    </div>
                                    <div className="form-group row pt-2">
                                        <label className="col-lg-3 col-form-label form-control-label">Last Name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="lastName" disabled value={this.state.lastName} />
                                        </div>
                                    </div>

                                    <div className="form-group row pt-2">
                                        <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="email" disabled value={this.state.email} />
                                        </div>
                                    </div>

                                    <div className="form-group row pt-2">
                                        <label className="col-lg-3 col-form-label form-control-label">Customer Type</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="customerType" disabled value={this.state.customerType} />
                                        </div>
                                    </div>

                                    <div className="form-group row pt-2">
                                        <label className="col-lg-3 col-form-label form-control-label">Gender</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="gender" disabled value={this.state.gender} />
                                        </div>
                                    </div>

                                    <div className="form-group row pt-2">
                                        <label className="col-lg-3 col-form-label form-control-label">Date Of Birth</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="dob" disabled value={this.state.dob} />
                                        </div>
                                    </div>

                                    <div className="form-group row pt-2">
                                        <label className="col-lg-3 col-form-label form-control-label">SSN</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="ssn" disabled value={this.state.ssn} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>{/* /form user info*/}
                    </div>
                </div>
            </div>
        )
    }
}
