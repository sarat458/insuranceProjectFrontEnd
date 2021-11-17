import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router'
const baseURL = "http://localhost:8000/agent"


export default class AgentLoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            userID: '',
            isAuth: false
        }
    }

    updateHandler = (e) => {
        //dynamic
        this.setState({ [e.target.name]: e.target.value })
    }

    loginHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        const credentials = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(`${baseURL}/login`, credentials)
            .then(res => {
                console.log(res);
                if (res.data.isAuth) {
                    console.log(res);
                    this.setState({ isAuth: true, userID: res.data.userID });
                    localStorage.userID = res.data.userID;
                    localStorage.isLogged = res.data.isAuth;
                }
            })
            .catch(err => {
                console.log(err)
            }
            )
    }



    render() {
        console.log(this.state.isAuth);
        if (this.state.isAuth) {
            return (
                <Redirect to="/home" />
            )
        }

        return (
            <div className="mt-5">
                <section className="login-clean pt-2" style={{ color: 'var(--bs-white)', background: 'linear-gradient(var(--bs-white) 20%, var(--bs-grey) 100%)' }}>
                    <form onSubmit={this.loginHandler}>
                        <h2 className="">{this.props.name}</h2>
                        <div className="illustration">
                        </div>
                        <div className="mb-3">
                            <input className="form-control" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.updateHandler} required />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.updateHandler} required />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary d-block w-100" type="submit" style={{ color: 'var(--bs-gray-100)', background: 'var(--bs-secondary)' }}>Log In</button>
                        </div>
                        <a className="forgot">Forgot your email or password?</a>
                    </form>
                </section>
            </div>
        )
    }
}
