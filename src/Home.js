import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react'
import Navbar from './Navbar'



export default class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className="row">
                    <div className="col text-center"><h3>Carousal</h3></div>
                </div>
                <hr />
                <div className="row">
                    <div className="col text-center"><h3>Auto</h3>
                        <FontAwesomeIcon icon="car" />
                    </div>
                    <div className="col text-center"><h3>Health</h3></div>
                    <div className="col text-center"><h3>Property</h3></div>
                </div>

            </React.Fragment>
        )
    }
}
