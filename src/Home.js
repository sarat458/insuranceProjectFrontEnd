import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react'
import Navbar from './Navbar'
import auto from '../src/assets/img/auto.jpg'
import health from '../src/assets/img/health.jpeg'
import property from '../src/assets/img/property.jpg'


export default class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className="row">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                height={500}
                                src={auto}
                                alt="Auto Insurance"
                            />
                            <Carousel.Caption>
                                <h3 className="text-light">Auto Insurance</h3>
                                <p>Heritage, State Farm and Liberty</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={health}
                                height={500}
                                alt="Health Insurance"
                            />

                            <Carousel.Caption>
                                <h3>Property Insurance</h3>
                                <p>Heritage, State Farm and Liberty</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={property}
                                height={500}
                                alt="Property Insurance"
                            />

                            <Carousel.Caption>
                                <h3>Health Insurance</h3>
                                <p>Heritage, State Farm and Liberty</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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
