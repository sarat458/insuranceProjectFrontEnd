import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import UserComponent from './UserComponent'
export default class User extends Component {
    render() {
        return (
            <div>
                <UserComponent />
            </div>
        )
    }
}
