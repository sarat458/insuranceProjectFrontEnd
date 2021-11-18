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
            nomineeFname2: '',
            mobileNumber2: '',
            nomineeFnameCopy: '',
            mobileNumberCopy: '',
            nomineeFname2Copy: '',
            mobileNumber2Copy: '',
            numberOfNominees: '',
            isGoBack: false,
            isAdd: false,
            isEdit: false,
            isRedirect: false
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

                            if (nomineeResults.data.length == 2) {
                                this.setState({
                                    nomineeFname: nomineeResults.data[0].nomineeFname,
                                    mobileNumber: nomineeResults.data[0].mobileNumber,
                                    nomineeFname2: nomineeResults.data[1].nomineeFname,
                                    mobileNumber2: nomineeResults.data[1].mobileNumber,
                                    nomineeFnameCopy: nomineeResults.data[0].nomineeFname,
                                    mobileNumberCopy: nomineeResults.data[0].mobileNumber,
                                    nomineeFname2Copy: nomineeResults.data[1].nomineeFname,
                                    mobileNumber2Copy: nomineeResults.data[1].mobileNumber,
                                    numberOfNominees: nomineeResults.data.length,
                                    isAdd: false
                                })
                            }

                            if (nomineeResults.data.length == 1) {
                                this.setState({
                                    nomineeFname: nomineeResults.data[0].nomineeFname,
                                    mobileNumber: nomineeResults.data[0].mobileNumber,
                                    nomineeFnameCopy: nomineeResults.data[0].nomineeFname,
                                    mobileNumberCopy: nomineeResults.data[0].mobileNumber,
                                    numberOfNominees: nomineeResults.data.length
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

    handleChange = (e) => {
        //dynamic
        this.setState({ [e.target.name]: e.target.value })
    }

    editDetails = (e) => {
        this.setState({
            isEdit: true,

        })
    }

    saveDetails = (e) => {
        console.log(this.state);
        if (this.state.isAdd) {
            const addNomineeDetails = {
                userID: localStorage.getItem('userID'),
                policyNumber: this.state.policyNumber,
                nomineeFname2: this.state.nomineeFname2,
                mobileNumber2: this.state.mobileNumber2
            }

            console.log(addNomineeDetails);

            axios.post(`${baseURL}/addNominee`, addNomineeDetails)
                .then(res => {
                    this.setState({
                        isRedirect: true
                    })
                })
                .catch(err => console.log(err))
        }

        if (this.state.isEdit && this.state.numberOfNominees == 1) {
            const addNomineeDetails = {
                userID: localStorage.getItem('userID'),
                policyNumber: this.state.policyNumber,
                nomineeFname: this.state.nomineeFname,
                mobileNumber: this.state.mobileNumber,
                oldNomineeFname: this.state.nomineeFnameCopy
            }

            // console.log(addNomineeDetails);

            axios.post(`${baseURL}/updateNominee`, addNomineeDetails)
                .then(res => {
                    this.setState({
                        isRedirect: true
                    })
                })
                .catch(err => console.log(err))
        }

        if (this.state.isEdit && this.state.numberOfNominees == 2) {
            const addNomineeDetails = {
                userID: localStorage.getItem('userID'),
                policyNumber: this.state.policyNumber,
                nomineeFname: this.state.nomineeFname,
                mobileNumber: this.state.mobileNumber,
                nomineeFname2: this.state.nomineeFname2,
                mobileNumber2: this.state.mobileNumber2,
                oldNomineeFname: this.state.nomineeFnameCopy,
                oldNomineeFname2: this.state.nomineeFname2Copy
            }

            console.log(addNomineeDetails);

            axios.post(`${baseURL}/updateNomineeMultiple`, addNomineeDetails)
                .then(res => {
                    this.setState({
                        isRedirect: true
                    })
                })
                .catch(err => console.log(err))
        }


    }
    deleteNominee = (e) => {
        let { id } = e.target;
        if (id == "nominee2") {
            axios.post(`${baseURL}/deleteNominee`, { userID: localStorage.getItem('userID'), policyNumber: this.state.policyNumber, nomineeFname: this.state.nomineeFname2 })
                .then(res => {
                    console.log(res.data);

                })
                .catch(err => console.log(err))
            this.setState({ isAdd: false, nomineeFname2: "", mobileNumber2: "", numberOfNominees: 1 });
        } else {
            axios.post(`${baseURL}/deleteNominee`, { userID: localStorage.getItem('userID'), policyNumber: this.state.policyNumber, nomineeFname: this.state.nomineeFname })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => console.log(err))
            this.setState({ nomineeFname: this.state.nomineeFname2, mobileNumber: this.state.mobileNumber2, mobileNumber2: "", nomineeFname2: "", isAdd: false, numberOfNominees: 1 });
        }
    }
    render() {
        if (this.state.isGoBack || this.state.isRedirect) {
            return (
                <Redirect to="/user" />
            )
        }


        const disabled = this.state.isAdd ? "disabled" : "";
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
                                    <h3 className="mb-0">Policy</h3>
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
                                                <input className="form-control" type="text" name="startDate" disabled value={this.state.startDate.slice(0, 10)} />
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
                                            <label className="col-lg-3 col-form-label form-control-label">1.Nominee Full Name</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="nomineeFname" disabled={!this.state.isEdit} value={this.state.nomineeFname} onChange={this.handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-group row pt-2">
                                            <label className="col-lg-3 col-form-label form-control-label">1.Mobile Number</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="mobileNumber" disabled={!this.state.isEdit} value={this.state.mobileNumber} />
                                            </div>
                                        </div>

                                        <div>
                                            <button type="button" id="nominee1" hidden={this.state.numberOfNominees == 1} className="btn btn-danger" onClick={(e) => { this.deleteNominee(e) }}>Delete Nominee 1</button>
                                        </div>
                                        {this.state.numberOfNominees == 2 ? <React.Fragment>
                                            <div className="form-group row pt-2">
                                                <label className="col-lg-3 col-form-label form-control-label">2.Nominee Full Name</label>
                                                <div className="col-lg-9">
                                                    <input className="form-control" type="text" name="nomineeFname2" disabled={!this.state.isEdit} value={this.state.nomineeFname2} />
                                                </div>
                                            </div>

                                            <div className="form-group row pt-2">
                                                <label className="col-lg-3 col-form-label form-control-label">2.Mobile Number</label>
                                                <div className="col-lg-9">
                                                    <input className="form-control" type="text" name="mobileNumber2" disabled={!this.state.isEdit} value={this.state.mobileNumber2} />
                                                </div>
                                            </div>
                                            <div>
                                                <button type="button" id="nominee2" className="btn btn-danger" onClick={(e) => { this.deleteNominee(e) }}>Delete Nominee 2</button>
                                            </div>
                                        </React.Fragment> : null}






                                        {/*TO Club multiple html tags, becasue react returns only one tag */}
                                        {this.state.isAdd ? <React.Fragment><div className="form-group row pt-2">
                                            <label className="col-lg-3 col-form-label form-control-label">Nominee Full Name</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="nomineeFname2" value={this.state.nomineeFname2} onChange={this.handleChange} required />
                                            </div>
                                        </div>

                                            <div className="form-group row pt-2">
                                                <label className="col-lg-3 col-form-label form-control-label">Mobile Number</label>
                                                <div className="col-lg-9">
                                                    <input className="form-control" type="text" name="mobileNumber2" value={this.state.mobileNumber2} onChange={this.handleChange} required />
                                                </div>
                                            </div>
                                            <div>
                                                <button type="button" id="nominee2" className="btn btn-danger" onClick={(e) => { this.deleteNominee(e) }}>Delete Nominee 2</button>
                                            </div>
                                        </React.Fragment> : null}


                                        <div className="form-group row pt-2" >
                                            <label className="col-lg-3 col-form-label form-control-label" />
                                            <div className="row">
                                                <div className="col">
                                                    <button className="btn btn-dark" type="reset" onClick={this.goBack} value="Back">Back</button>
                                                </div>
                                                <div className="col">
                                                    <button className="btn btn-success" type="button" disabled={!this.state.isAdd ^ this.state.isEdit} onClick={this.saveDetails} defaultValue="Save">Save</button>
                                                </div>
                                                <div className="col">
                                                    {!this.state.isAdd ? <button className="btn btn-success" type="button" disabled={this.state.numberOfNominees === 2 && !this.state.isAdd} onClick={this.addDetails}
                                                        defaultValue="Add" >Add</button> : <button className="btn btn-success" type="button" onClick={this.deleteDetails}
                                                            defaultValue="Delete">Delete</button>}
                                                </div>
                                                <div className="col">
                                                    <button className="btn btn-primary" type="button" disabled={this.state.isEdit} onClick={this.editDetails} defaultValue="Edit">Edit</button>
                                                </div>
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
