import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-light navbar-expand bg-light navigation-clean'>
                    <div className='container'>
                        <a className='navbar-brand' href='#'>
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
                                        <a className='nav-link' href='#'>
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/register' style={{ textDecoration: 'none' }}>
                                        <a className='nav-link' href='#'>
                                            Register
                                        </a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/login' style={{ textDecoration: 'none' }}>
                                        <a className='nav-link' href='#'>
                                            User Login
                                        </a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/agentLogin' style={{ textDecoration: 'none' }}>
                                        <a className='nav-link' href='#'>
                                            Agent Login
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
