import React, { Component } from 'react'
import NavbarUser from './NavbarUser'
import UserRaiseClaim from './UserRaiseClaim'

export default class RaiseClaim extends Component {
    render() {
        return (
            <div>
                <NavbarUser />
                <UserRaiseClaim />
            </div>
        )
    }
}
