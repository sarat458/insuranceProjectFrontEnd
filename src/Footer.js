import React, { Component } from 'react'

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
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Legacy</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Careers</h3>
                                <ul>
                                    <li><a href="#">Job openings</a></li>
                                    <li><a href="#">Employee success</a></li>
                                    <li><a href="#">Benefits</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 item social"><a href="#"><i className="icon ion-social-facebook" /></a><a href="#"><i className="icon ion-social-twitter" /></a><a href="#"><i className="icon ion-social-snapchat" /></a><a href="#"><i className="icon ion-social-instagram" /></a>
                                <p className="copyright">CalState © 2021</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
