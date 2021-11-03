import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <header className="text-center text-white masthead" style={{ background: 'url("../src/assets/img/bg-masthead.jpg")no-repeat center center', backgroundSize: 'cover' }}>
                        <div className="overlay" style={{ opacity: '0.60' }} />
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 mx-auto position-relative">
                                    <h1 className="mb-5">One stop solution for a secure future !!!</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section className="text-center bg-light features-icons">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                        <div className="d-flex features-icons-icon"><i className="fas fa-car m-auto text-primary" data-bss-hover-animate="pulse" /></div>
                                        <h3>Auto Insurance</h3>
                                        <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                        <div className="d-flex features-icons-icon"><i className="icon-heart m-auto text-primary" data-bss-hover-animate="pulse" /></div>
                                        <h3>Health Insurance</h3>
                                        <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                        <div className="d-flex features-icons-icon"><i className="icon-home m-auto text-primary" data-bss-hover-animate="pulse" /></div>
                                        <h3>Rental Insurance</h3>
                                        <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        )
    }
}
