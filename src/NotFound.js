import React, { Component } from 'react'
import Navbar from './Navbar'

export default class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <h3>
                    ERROR: 404 NOT FOUND
                </h3>
            </React.Fragment>
        )
    }
}
