import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class AgentNav extends Component {
    constructor() {
        super()
        this.state = {
            isAuth: true
        }
    }


    componentDidMount() {
        this.setState({
            isAuth: localStorage.getItem('isAgentLogged')
        })
    }

    logout = () => {
        this.setState({
            isAuth: false
        })
    }



    render() {

        if (!this.state.isAuth) {
            return (
                <Redirect to="/" />
            )
        }


        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand">Agent Home</a>
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
