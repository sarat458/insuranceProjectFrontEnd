import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor() {
        super()
    }

    // componentDidMount() {
    //     localStorage.clear();
    // }

    render() {
        return (
            <div className="mb-5">
                <nav className='navbar  navbar-expand navbar-dark bg-dark navigation-clean fixed-top'>
                    <div className='container'>
                        <a className='navbar-brand'>
                            CalState Insurance
                        </a>
                        <button
                            data-bs-toggle='collapse'
                            className='navbar-toggler'
                            data-bs-target='#navcol-1'
                        />
                        <div className='collapse navbar-collapse' id='navcol-1'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <Link to='/' style={{ textDecoration: 'none' }}>
                                        <a className='nav-link'>
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/register' style={{ textDecoration: 'none' }}>
                                        <a className='nav-link'>
                                            Register
                                        </a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/login' style={{ textDecoration: 'none' }}>
                                        <a className='nav-link'>
                                            User Login
                                        </a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/agentLogin' style={{ textDecoration: 'none' }}>
                                        <a className='nav-link'>
                                            Agent Login
                                        </a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/companyLogin' style={{ textDecoration: 'none' }}>
                                        <a className='nav-link'>
                                            Company Login
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
