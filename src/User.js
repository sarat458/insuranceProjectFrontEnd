import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import NavbarUser from './NavbarUser'
import Userdashboard from './sample'

export default class User extends Component {
    render() {
        return (
            <div>
                <NavbarUser />
                <Userdashboard />
            </div >
        )
    }
}
