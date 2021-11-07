import React, { Component } from 'react'

export default class UserComponent extends Component {
    render() {
        return (
            <div className="pt-0" id="wrapper">
                <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                    <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                        <div className="sidebar-brand-text mx-3"><span>CALSTATE</span></div>
                    </a>
                        <ul className="navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item"><a className="nav-link active" href="index.html"><i className="fas fa-tachometer-alt" /><span>Dashboard</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="profile.html"><i className="fas fa-user" /><span>Profile</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="purchase.html"><i className="fa fa-dollar" /><span>Purchase Policy</span></a></li>
                        </ul>
                        <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button" /></div>
                    </div>
                </nav>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" style={{ textAlign: 'center' }}>
                        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top" style={{ textAlign: 'center' }}>
                            <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars" /></button>
                                <nav className="navbar navbar-light navbar-expand-md" style={{ textAlign: 'center' }}>
                                    <div className="container-fluid"><a className="navbar-brand" href="#">CalState</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                                        <div className="collapse navbar-collapse" id="navcol-1">
                                            <ul className="navbar-nav" style={{ textAlign: 'center' }}>
                                                <li className="nav-item"><a className="nav-link active" href="#" style={{ textAlign: 'center', width: 150, color: 'rgb(0,0,0)', padding: '0 px 0px 0px 0px' }}>Car Insurance</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#" style={{ width: 150, color: 'rgb(0,0,0)' }}>Health Insurance</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#" style={{ width: 150, background: '#ffffff', color: 'rgb(0,0,0)' }}>Rental Insurance</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                                <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group" />
                                </form>
                                <ul className="navbar-nav flex-nowrap ms-auto">
                                    <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search" /></a>
                                        <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                            <form className="me-auto navbar-search w-100">
                                                <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                                    <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#" />
                                            <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                                <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                                    <div className="me-3">
                                                        <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white" /></div>
                                                    </div>
                                                    <div><span className="small text-gray-500">December 12, 2019</span>
                                                        <p>A new monthly report is ready to download!</p>
                                                    </div>
                                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                                    <div className="me-3">
                                                        <div className="bg-success icon-circle"><i className="fas fa-donate text-white" /></div>
                                                    </div>
                                                    <div><span className="small text-gray-500">December 7, 2019</span>
                                                        <p>$290.29 has been deposited into your account!</p>
                                                    </div>
                                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                                    <div className="me-3">
                                                        <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white" /></div>
                                                    </div>
                                                    <div><span className="small text-gray-500">December 2, 2019</span>
                                                        <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                                    </div>
                                                </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#" />
                                            <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                                <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar4.jpeg" />
                                                        <div className="bg-success status-indicator" />
                                                    </div>
                                                    <div className="fw-bold">
                                                        <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                        <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                                    </div>
                                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar2.jpeg" />
                                                        <div className="status-indicator" />
                                                    </div>
                                                    <div className="fw-bold">
                                                        <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                        <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                                    </div>
                                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar3.jpeg" />
                                                        <div className="bg-warning status-indicator" />
                                                    </div>
                                                    <div className="fw-bold">
                                                        <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                        <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                                    </div>
                                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar5.jpeg" />
                                                        <div className="bg-success status-indicator" />
                                                    </div>
                                                    <div className="fw-bold">
                                                        <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                        <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                                    </div>
                                                </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                            </div>
                                        </div>
                                        <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown" />
                                    </li>
                                    <div className="d-none d-sm-block topbar-divider" />
                                    <li className="nav-item dropdown no-arrow">
                                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span><img className="border rounded-circle img-profile" src="avatars/avatar1.jpeg" /></a>
                                            <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />&nbsp;Activity log</a>
                                                <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" />&nbsp;Logout</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="container-fluid">
                            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                                <h3 className="text-dark mb-0">Dashboard</h3>
                            </div>
                            <div className="row" style={{ padding: 5 }}>
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-primary py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>total Monthly premium</span></div>
                                                    <div className="text-dark fw-bold h5 mb-0"><span>$40,000</span></div>
                                                </div>
                                                <div className="col-auto" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-success py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-success fw-bold text-xs mb-1"><span>Latest due</span></div>
                                                    <div className="text-dark fw-bold h5 mb-0"><span>{'{'}Date Field here{'}'}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-info py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-info fw-bold text-xs mb-1"><span>Your policies</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-warning py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-warning fw-bold text-xs mb-1"><span>Nominee details</span></div>
                                                    <div className="text-dark fw-bold h5 mb-0"><span>18</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{ padding: '0px 0px 30px 0px' }}>
                                    <div className="btn-group" role="group"><button className="btn btn-primary" type="button" style={{ fontSize: 20 }}>Raise Claim</button></div>
                                </div>
                            </div>
                        </div>
                        <div />
                        <div className="table-responsive" style={{ textAlign: 'center' }}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Your Policies</th>
                                        <th style={{ textShadow: '0px 0px', textAlign: 'center' }}>Company Name</th>
                                        <th>Insurance Type</th>
                                        <th>Premium per Month</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ height: 200 }}>
                                        <td style={{ height: 200 }}>
                                            <div className="dropdown"><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">Policy numbers</button>
                                                <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                                            </div>
                                        </td>
                                        <td />
                                        <td />
                                        <td />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <footer className="bg-white sticky-footer">
                        <div className="container my-auto">
                            <div className="text-center my-auto copyright"><span>Copyright © CalState 2021</span></div>
                        </div>
                    </footer>
                </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
            </div>

        )
    }
}
