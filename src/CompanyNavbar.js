import axios from 'axios';
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

const baseURL = "http://localhost:8000/company"
export default class CompanyNavbar extends Component {
    constructor() {
        super();
        this.state = {
            isCompanyLogout: false,
            companyName: ''
        }
    }

    componentDidMount() {
        const companyDetails = {
            companyID: localStorage.getItem('companyID')
        }
        console.log(companyDetails);
        axios.post(`${baseURL}/companyDetails`, companyDetails)
            .then(res => {
                console.log(res.data[0]);
                this.setState({
                    companyName: res.data[0].companyName
                })
            })
    }

    logout = (e) => {
        e.preventDefault();
        this.setState({
            isCompanyLogout: true
        })
    }


    render() {
        if (this.state.isCompanyLogout) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand">{this.state.companyName}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            {/** <li className="nav-item mx-3">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li> */}
                            <button className="btn btn-dark btn-outline-light" type="submit" onClick={this.logout} >Logout</button>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
