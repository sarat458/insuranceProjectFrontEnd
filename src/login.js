import React, { Component } from 'react'

export class login extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand bg-light navigation-clean">
                    <div className="container"><a className="navbar-brand" href="#">CalState Insurance</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1" />
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Register</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">User Login</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Agent Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="login-clean" style={{ color: 'var(--bs-blue)', background: 'linear-gradient(var(--bs-blue) 0%, var(--bs-green) 100%)' }}>
                    <form>
                        <h2 className="visually-hidden">Login Form</h2>
                        <div className="illustration"><i className="material-icons" style={{ color: 'var(--bs-blue)', fontSize: 40, textAlign: 'left' }}>lock_outline</i></div>
                        <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" required /></div>
                        <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" required /></div>
                        <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{ color: 'var(--bs-gray-100)', background: 'var(--bs-info)' }}>Log In</button></div><a className="forgot" href="#">Forgot your email or password?</a>
                    </form>
                    <footer className="footer-clean" style={{ transform: 'perspective(0px) translateX(0px) translateY(87px)' }}>
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
                                    <p className="copyright">Company Name © 2021</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </div>
        )
    }
}

export default login
