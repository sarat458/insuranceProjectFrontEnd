import React, { Component } from 'react'
// eslint-disable-next-line
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-clean navbar-light bg-light pb-5 mb-5 pt-3 fixed-bottom" style={{ transform: 'perspective(0px) translateX(0px) translateY(87px)', paddingBottom: '100%' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a>Web design</a></li>
                                    <li><a>Development</a></li>
                                    <li><a>Hosting</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a >Company</a></li>
                                    <li><a>Team</a></li>
                                    <li><a>Legacy</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Careers</h3>
                                <ul>
                                    <li><a>Job openings</a></li>
                                    <li><a>Employee success</a></li>
                                    <li><a>Benefits</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 item social"><a><i className="icon ion-social-facebook" /></a><a><i className="icon ion-social-twitter" /></a><a><i className="icon ion-social-snapchat" /></a><a><i className="icon ion-social-instagram" /></a>
                                <p className="copyright">CalState © 2021</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
