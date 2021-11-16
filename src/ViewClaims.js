import React, { Component } from 'react'
import NavbarUser from './NavbarUser'
import UserClaims from './UserClaims'

export default class ViewClaims extends Component {
    render() {
        return (
            <div>
                <NavbarUser />
                <UserClaims />
            </div>
        )
    }
}
