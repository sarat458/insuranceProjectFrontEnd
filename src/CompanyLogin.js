import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router'

const baseURL = "http://localhost:8000/company"
export default class CompanyLogin extends Component {
    constructor() {
        super()
        this.state = {
            companyID: '',
            password: '',
            isAuth: localStorage.getItem('isCompanyAuth')
        }
    }

    updateHandler = (e) => {
        //dynamic
        this.setState({ [e.target.name]: e.target.value })
    }

    loginHandler = (e) => {
        e.preventDefault()
        // console.log(this.state)
        const credentials = {
            companyID: this.state.companyID,
            password: this.state.password
        }
        axios.post(`${baseURL}/login`, credentials)
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                    localStorage.setItem('companyID', res.data.companyID);
                    localStorage.setItem('isCompanyAuth', res.data.isAuth);
                }
            })
            .catch(err => console.log(err))
    }


    render() {
        if (this.state.isAuth) {
            return (
                <Redirect to="/companyDashboard" />
            )
        }
        return (
            <div className="mt-5">
                <section className="login-clean pt-2" style={{ color: 'var(--bs-white)', background: 'linear-gradient(var(--bs-white) 20%, var(--bs-grey) 100%)' }}>
                    <form action="" method="post" onSubmit={this.loginHandler}>
                        <h2 className="">Company Login</h2>
                        <div className="illustration"></div>
                        <div className="mb-3"><input className="form-control" type="text" name="companyID" placeholder="Company ID" value={this.state.companyID} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{ color: 'var(--bs-gray-100)', background: 'var(--bs-secondary)' }}>Log In</button></div><a className="forgot">Forgot your email or password?</a>
                    </form>
                </section>
            </div>
        )
    }
}
