import axios from 'axios'
import React, { Component } from 'react'
const baseURL = "http://localhost:8000/agent"
export default class AgentDashboard extends Component {
    constructor() {
        super()
        this.state = {
            isAuth: localStorage.getItem('isAgentLogged'),
            prospectiveCustomerDetails: [],
            enrolledCustomers: [],
            weeklyStats: [],
            monthlyStats: [],
            overdueCustomers: []
        }
    }

    componentDidMount() {
        this.prospectiveCustomerDetails();
        this.enrolledCustomersDetails();
        this.weeklyStats();
        this.monthlyStats();
        this.overdueCustomersDetails();
    }


    prospectiveCustomerDetails = () => {
        axios.get(`${baseURL}/getProspectiveCustomerDetails`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    prospectiveCustomerDetails: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    enrolledCustomersDetails = () => {
        const agentDetails = {
            agentID: localStorage.getItem('agentID'),
        }
        console.log(agentDetails.agentID);
        axios.post(`${baseURL}/getCustomerDetails`, agentDetails)
            .then(res => {
                console.log(res.data);
                this.setState({
                    enrolledCustomers: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    prospectiveCustomersTable = () => {
        let row = [];
        let id = 1;
        this.state.prospectiveCustomerDetails.map(cust => {
            row.push(
                <tr key={id++}>
                    <td>{id}</td>
                    <td>{cust.fullName}</td>
                    <td>{cust.emailID}</td>
                </tr>
            )
        })

        return row;
    }

    enrolledCustomersTable = () => {
        let row = [];
        let id = 1;
        this.state.enrolledCustomers.map(cust => {
            row.push(
                <tr key={id++}>
                    <td>{id}</td>
                    <td>{cust.fullName}</td>
                    <td>{cust.email}</td>
                </tr>
            )
        })

        return row;
    }

    monthlyStats = () => {
        const agentDetails = {
            agentID: localStorage.getItem('agentID'),
        }
        console.log(agentDetails.agentID);
        axios.post(`${baseURL}/monthlyStats`, agentDetails)
            .then(res => {
                console.log(res.data);
                this.setState({
                    monthlyStats: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    weeklyStats = () => {
        const agentDetails = {
            agentID: localStorage.getItem('agentID'),
        }
        console.log(agentDetails.agentID);
        axios.post(`${baseURL}/weeklyStats`, agentDetails)
            .then(res => {
                console.log(res.data);
                this.setState({
                    weeklyStats: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    overdueCustomersDetails = () => {
        const agentDetails = {
            agentID: localStorage.getItem('agentID'),
        }
        console.log(agentDetails.agentID);
        axios.post(`${baseURL}/overduePolicies`, agentDetails)
            .then(res => {
                console.log(res.data);
                this.setState({
                    overdueCustomers: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    overdueCustomersDetailsTable = () => {
        let row = [];
        let id = 1;
        if (this.state.overdueCustomers != undefined && this.state.overdueCustomers.length > 0) {
            this.state.overdueCustomers.map(cust => {
                row.push(
                    <tr key={id++}>
                        <td>{id}</td>
                        <td>{cust.policy_number}</td>
                        <td>{cust.fullName}</td>
                        <td>{cust.email}</td>
                    </tr>
                )
            })
        } else {
            row.push(
                <td>No Overdue customers</td>
            )
        }

        return row;
    }


    render() {
        return (
            <React.Fragment>
                <div className="mt-5">
                    <div className="row" style={{ maxHeight: "300px" }}>
                        <div className="col mr-5 ml-3">
                            <h4>Prospective Customers</h4>
                            <table className="table table-bordered border-dark ">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Customer Name</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.prospectiveCustomersTable()}
                                </tbody>
                            </table>
                        </div>
                        <div className="col mr-5">
                            <h4>Enrolled Customers</h4>
                            <div style={{ overflow: "scroll", maxHeight: "300px" }}>
                                <table className="table table-bordered border-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.enrolledCustomersTable()}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col">
                            <div className="card p-4" style={{ width: '18rem', maxHeight: '184.4px' }}>
                                <div className="card-body">
                                    <h3 className="card-title text-center">Monthly Stats</h3>
                                    <h6 className="card-subtitle mb-2 text-muted mx-5 text-center">{this.state.monthlyStats.totalNumberOfPolicies} policies sold</h6>
                                    <h1 className="text-success text-center">${this.state.monthlyStats.totalSum}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card p-4" style={{ width: '18rem', maxHeight: '184.4px' }}>
                                <div className="card-body">
                                    <h3 className="card-title text-center">Weekly Stats</h3>
                                    <h6 className="card-subtitle mb-2 text-muted mx-5 text-center">{this.state.weeklyStats.totalNumberOfPolicies} policies sold</h6>
                                    <h1 className="text-success text-center">${this.state.weeklyStats.totalSum}</h1>
                                </div>
                            </div>
                        </div>


                        <div className="col mr-5">
                            <h3 className="card-title">Overdue Customers</h3>
                            <div style={{ overflow: "scroll", maxHeight: "300px" }}>
                                <table className="table table-bordered border-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Policy Number</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.overdueCustomersDetailsTable()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )
    }
}
