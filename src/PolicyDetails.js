import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import NavbarUser from './NavbarUser'

const baseURL = "http://localhost:8000/user"
export default class PolicyDetails extends Component {
    constructor() {
        super()
        this.state = {
            policyNumber: '',
            insuranceType: '',
            startDate: '',
            companyName: '',
            duration: '',
            nomineeFname: '',
            mobileNumber: '',
            isGoBack: false,
            isAdd: false
        }
    }

    componentDidMount() {

        const userDetails = {
            userID: localStorage.getItem('userID')
        }
        axios.post(`${baseURL}/getUserPolicies`, userDetails)
            .then(res => {
                if (res.data.length > 0) {

                    const policyNum = localStorage.getItem('policyNumber');
                    const policyData = res.data.filter(data => data.policyNumber == policyNum);
                    console.log(policyData);
                    this.setState({
                        policyNumber: policyNum,
                        insuranceType: policyData[0].insuranceType,
                        startDate: policyData[0].startDate,
                        companyName: policyData[0].companyName,
                        duration: policyData[0].duration
                    })
                    const getNomineeDetails = {
                        userID: localStorage.getItem('userID'),
                        policyNumber: localStorage.getItem('policyNumber')
                    }
                    axios.post(`${baseURL}/getNomineeDetails`, getNomineeDetails)
                        .then(nomineeResults => {
                            if (res.data.length > 0) {
                                this.setState({
                                    nomineeFname: nomineeResults.data[0].nomineeFname,
                                    mobileNumber: nomineeResults.data[0].mobileNumber
                                })
                            }
                        })
                    console.log(this.state)
                }
            })
            .catch(err => console.log(err))
    }

    goBack = (e) => {
        e.preventDefault();
        this.setState({
            isGoBack: true
        })
    }

    addDetails = (e) => {
        this.setState({
            isAdd: true
        })
    }
    deleteDetails = (e) => {
        this.setState({
            isAdd: false
        })
    }

    render() {
        if (this.state.isGoBack) {
            return (
                <Redirect to="/user" />
            )
        }
        return (
            <div>
                <NavbarUser />
                <div className="">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <span className="anchor" id="formUserEdit" />
                            <hr className="my-5" />
                            {/*form user info*/}
                            <div className="card card-outline-secondary">
                                <div className="card-header">
                                    <h3 className="mb-0">Policy Details</h3>
                                </div>
                                <div className="card-body">
                                    <form autoComplete="off" className="form" role="form">
                                        <div className="form-group row pt-2">
                                            <label className="col-lg-3 col-form-label form-control-label">Policy Number</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="policyNumber" disabled value={this.state.policyNumber} />
                                            </div>
                                        </div>
                                        <div className="form-group row pt-2">
                                            <label className="col-lg-3 col-form-label form-control-label">Insurance Type</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="insuranceType" disabled value={this.state.insuranceType} />
                                            </div>
                                        </div>
                                        <div className="form-group row pt-2">
                                            <label className="col-lg-3 col-form-label form-control-label">Start Date</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="startDate" disabled value={this.state.startDate} />
                                            </div>
                                        </div>
                                        <div className="form-group row pt-2">
                                            <label className="col-lg-3 col-form-label form-control-label">Company Name</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="companyName" disabled value={this.state.companyName} />
                                            </div>
                                        </div>

                                        <div className="form-group row pt-2">
                                            <label className="col-lg-3 col-form-label form-control-label">Duration</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="duration" disabled value={this.state.duration} />
                                            </div>
                                        </div>


                                        <div className="form-group row pt-2">
                                            <label className="col-lg-3 col-form-label form-control-label">Nominee Full Name</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="nomineeFname" disabled value={this.state.nomineeFname} />
                                            </div>
                                        </div>

                                        <div className="form-group row pt-2">
                                            <label className="col-lg-3 col-form-label form-control-label">Mobile Number</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="mobileNumber" disabled value={this.state.mobileNumber} />
                                            </div>
                                        </div>

                                        {/*TO Club multiple html tags, becasue react returns only one tag */}
                                        {this.state.isAdd ? <React.Fragment><div className="form-group row pt-2">
                                            <label className="col-lg-3 col-form-label form-control-label">Nominee Full Name</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="nomineeFname" value="" onChange={this.handleChange} required />
                                            </div>
                                        </div>

                                            <div className="form-group row pt-2">
                                                <label className="col-lg-3 col-form-label form-control-label">Mobile Number</label>
                                                <div className="col-lg-9">
                                                    <input className="form-control" type="text" name="mobileNumber" value="" onChange={this.handleChange} required />
                                                </div>
                                            </div></React.Fragment> : null}


                                        <div className="form-group row pt-2">
                                            <label className="col-lg-3 col-form-label form-control-label" />
                                            <div className="col-lg-9">
                                                <input className="btn btn-dark mx-5" type="reset" onClick={this.goBack} value="Back" />
                                                <input className="btn btn-success mx-5" type="button" onClick={this.saveDetails} defaultValue="Save" />
                                                {!this.state.isAdd ? <input className="btn btn-success mx-5" type="button" onClick={this.addDetails}
                                                    defaultValue="Add" /> : <input className="btn btn-success mx-5" type="button" onClick={this.deleteDetails}
                                                        defaultValue="Delete" />}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>{/* /form user info*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
