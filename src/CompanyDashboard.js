import React, { Component } from 'react'
import CompanyNavbar from './CompanyNavbar'
import Navbar from './Navbar'
import NavbarUser from './NavbarUser'

export default class CompanyDashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <CompanyNavbar />
                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Policy Number</th>
                            <th scope="col">Policy Type</th>
                            <th scope="col">Comments</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>I need my money</td>
                            <td>I need my money</td>
                            <td>
                                <div class="dropdown show">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#exampleModal" href="#">Accept</a>
                                        <a class="dropdown-item" href="#">Decline</a>
                                        <a class="dropdown-item" href="#">Put on hold</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>I need my money</td>
                            <td>I need my money</td>
                            <td>
                                <div class="dropdown show">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#exampleModal" href="#">Accept</a>
                                        <a class="dropdown-item" href="#">Decline</a>
                                        <a class="dropdown-item" href="#">Put on hold</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>I need my money</td>
                            <td>I need my money</td>
                            <td>
                                <div class="dropdown show">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#exampleModal" href="#">Accept</a>
                                        <a class="dropdown-item" href="#">Decline</a>
                                        <a class="dropdown-item" href="#">Put on hold</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
