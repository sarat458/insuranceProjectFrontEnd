import React, { Component } from 'react'
import NavbarUser from './NavbarUser'
import UserClaims from './UserClaims'

export default class Claims extends Component {
    render() {
        return (
            <div>
                <NavbarUser />
                <UserClaims />
            </div>
        )
    }
}
