import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router'

const baseURL = "http://localhost:8000/user"
export default class UserRaiseClaim extends Component {
    constructor() {
        super()
        this.state = {
            policyNumber: '',
            claimComments: '',
            policyNumbers: [],
            isRedirect: false
        }
    }

    componentDidMount() {
        const userdetails = {
            userID: localStorage.getItem('userID')
        }
        axios.post(`${baseURL}/getUserPolicies`, userdetails)
            .then(res => {
                console.log(res.data);
                let id = 1;
                res.data.map(num => {
                    num["id"] = id++;
                })
                if (res.data.length > 0) {
                    this.setState({
                        policyNumbers: res.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    policyNumber = () => {
        let list = [];
        this.state.policyNumbers.map(num => {
            console.log(num.policyNumber);
            list.push(
                <option id={num.id}>{num.policyNumber}</option>
            )
        })

        return list;
    }


    raiseClaim = (e) => {
        e.preventDefault();
        console.log(this.state.policyNumbers);

        const raiseClaimDetails = {
            userID: localStorage.getItem('userID'),
            policyNumber: this.state.policyNumber,
            claimType: '',
            claimComments: this.state.claimComments,
            companyID: ''
        }
        axios.post(`${baseURL}/getClaimDetails`, raiseClaimDetails)
            .then(res => {
                raiseClaimDetails.claimType = res.data.claimType;
                raiseClaimDetails.companyID = res.data.companyID;

                axios.post(`${baseURL}/raiseClaim`, raiseClaimDetails)
                    .then(res => {
                        this.setState({
                            isRedirect: true
                        })
                    })
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        if (this.state.isRedirect) {
            return (
                <Redirect to='/claims' />
            )
        }

        return (
            <div className="mt-5">
                <form action style={{ paddingLeft: '2%' }} onSubmit={this.raiseClaim}>
                    <div className="form-group" style={{ width: '75%' }}>
                        <label htmlFor="exampleFormControlSelect1">Select Policy</label>
                        <select className="form-control" id="exampleFormControlSelect1" name="policyNumber" onChange={this.handleChange}>
                            <option>--------Select a Policy Number--------</option>
                            {this.policyNumber()}
                        </select>
                    </div>
                    <div className="input-group mt-3" style={{ width: '75%' }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text">Describe your reason</span>
                        </div>
                        <textarea className="form-control mx-2" aria-label="With textarea" defaultValue={""} name="claimComments" onChange={this.handleChange} />
                    </div>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            I understand the terms and conditions
                        </label>
                    </div>
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <button type="submit" className="btn btn-primary btn-lg" >Submit</button>
                    </div>
                </form>

            </div>
        )
    }
}
