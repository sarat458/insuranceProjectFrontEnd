import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import NavbarUser from './NavbarUser'
import Userdashboard from './Userdashboard'

export default class User extends Component {
    render() {
        console.log("Here");
        return (
            <div>
                <NavbarUser />
                <Userdashboard />
            </div >
        )
    }
}
