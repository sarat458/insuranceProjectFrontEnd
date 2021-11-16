import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const baseURL = "http://localhost:8000/user"
export default class NavbarUser extends Component {
    constructor() {
        super();
        this.state = {
            userFName: '',
            policyData: [],
            isLogged: localStorage.getItem('isLogged')
        }
    }

    componentDidMount() {
        const userDetails = {
            userID: localStorage.getItem('userID')
        }
        console.log("User ID", userDetails)
        axios.post(`${baseURL}/getUserDetails`, userDetails)
            .then(res => {
                console.log("user Details", res);
                this.setState({
                    userFName: res.data[0].firstName
                })
            })
            .catch(err => console.log(err))
    }

    logout = () => {
        // localStorage.clear();
        localStorage.setItem('isLogged', false);
        localStorage.removeItem('userID')
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
        console.log(this.state.userFName)
        console.log(this.state.isLogged);
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Claims
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/claims">View Claims</Link></li>
                                    <li><Link className="dropdown-item" to="/raiseClaim">Raise Claim</Link></li>

                                </ul>
                            </li>


                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/profile">Hello, {this.state.userFName}</Link>
                            </li>
                            <button className="btn btn-dark btn-outline-light" type="submit" onClick={this.logout} >Logout</button>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
