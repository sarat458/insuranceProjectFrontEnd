import React, { Component } from 'react'
import NavbarUser from './NavbarUser'
import UserProfile from './UserProfile'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <NavbarUser />
                <UserProfile />
            </div>
        )
    }
}
