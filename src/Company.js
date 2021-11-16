import React, { Component } from 'react'
import Navbar from './Navbar'
import CompanyLogin from './CompanyLogin'

export default class Company extends Component {
    render() {

        return (
            <div>
                <Navbar />
                <CompanyLogin />
            </div>
        )
    }
}
