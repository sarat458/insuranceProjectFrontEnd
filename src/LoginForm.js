import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router'

const baseURL = "http://localhost:8000/user"
export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            isAuth: false
        }
    }

    updateHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    loginHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        const credentials = {
            email: this.state.email,
            password: this.state.password,
            isAuth: this.state.isAuth
        }
        axios.post(`${baseURL}/login`, credentials)
            .then(res => {
                if (res.data.email === credentials.email && res.data.isAuth === true) {
                    this.setState({ isAuth: true })
                }
            })
            .catch(err => console.log(err))
    }



    render() {
        const { email, password, isAuth } = this.state;
        const isLogged = isAuth;
        console.log(this.state);
        if (isLogged) {
            return (
                <Redirect to='/user' />
            )
        }
        return (
            <div>
                <section className="login-clean pt-2" style={{ color: 'var(--bs-white)', background: 'linear-gradient(var(--bs-white) 20%, var(--bs-grey) 100%)' }}>
                    <form action="" method="post" onSubmit={this.loginHandler}>
                        <h2 className="visually-hidden">Login Form</h2>
                        <div className="illustration"><i className="material-icons" style={{ color: 'var(--bs-dark)', fontSize: 100, textAlign: 'left' }}>lock_outline</i></div>
                        <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" value={email} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" value={password} onChange={this.updateHandler} required /></div>
                        <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{ color: 'var(--bs-gray-100)', background: 'var(--bs-secondary)' }}>Log In</button></div><a className="forgot">Forgot your email or password?</a>
                    </form>
                </section>
            </div>
        )
    }
}

export default LoginForm
