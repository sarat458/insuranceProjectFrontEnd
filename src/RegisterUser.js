import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router'



const baseURL = "http://localhost:8000/user"
export default class RegisterUser extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            ssn: '',
            fname: '',
            mname: '',
            lname: '',
            gender: '',
            dob: '',
            mobileNumber: '',
            isSuccess: false
        }
    }

    updateHandler = (e) => {
        //dynamic
        this.setState({ [e.target.name]: e.target.value })
    }

    registerHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        const registrationDetails = {
            email: this.state.email,
            password: this.state.password,
            ssn: this.state.ssn,
            fname: this.state.fname,
            mname: this.state.mname,
            lname: this.state.lname,
            gender: this.state.gender,
            dob: this.state.dob,
            mobileNumber: this.state.mobileNumber
        }
        console.log(registrationDetails);

        axios.post(`${baseURL}/register`, registrationDetails)
            .then(res => {
                if (res.data) {
                    this.setState({ isSuccess: true })
                }
            })
            .catch(err => console.log(err))
    }


    render() {

        if (this.state.isSuccess) {
            return (
                <Redirect to="/login" />
            )
        }
        return (
            <div className="mt-2">
                <section className="login-clean pt-2" style={{ color: 'var(--bs-white)', background: 'linear-gradient(var(--bs-white) 20%, var(--bs-grey) 100%)' }}>
                    <form className="pt-2 pb-3" action="" method="post" onSubmit={this.registerHandler}>
                        <div className="illustration"></div>
                        <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" value={this.email} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" value={this.password} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><input className="form-control" type="text" name="ssn" placeholder="SSN" value={this.ssn} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><input className="form-control" type="text" name="fname" placeholder="First Name" value={this.fname} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><input className="form-control" type="text" name="mname" placeholder="Middle Name" value={this.mname} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><input className="form-control" type="text" name="lname" placeholder="Last Name" value={this.lname} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><input className="form-control" type="text" name="gender" placeholder="Gender" value={this.gender} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><input className="form-control" type="text" name="dob" placeholder="Date of Birth" value={this.dob} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><input className="form-control" type="text" name="mobileNumber" placeholder="Mobile Number" value={this.mobileNumber} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{ color: 'var(--bs-gray-100)', background: 'var(--bs-secondary)' }}>Register</button></div><a className="forgot">Forgot your email or password?</a>
                    </form>
                </section>
            </div>
        )
    }
}
