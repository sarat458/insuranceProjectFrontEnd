import React, { Component } from 'react'
import NavbarUser from './NavbarUser'
import ViewPolicies from './viewPolicies'

export default class Policies extends Component {
    render() {
        return (
            <div>
                <NavbarUser />
                <ViewPolicies />
            </div>
        )
    }
}
