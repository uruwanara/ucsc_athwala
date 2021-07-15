import React from 'react';
import Nav from '../Navbar/Navbar';
import Side from '../StudentSidebar/Sidebar';
// import './FundraisingDashboard.css';
import Viewfund from '../../image/view_fund.png';
import Createfund from '../../image/create_fund.jpg';
import { Link, useHistory } from "react-router-dom";


function FundraisingDashboard() {
    const history = useHistory();
    return (
        <div>
            <div><Nav /></div>
            <div style={{ display: 'flex' }}>
                <Side />
                <div className="container container-custom">

                    <h2 className="text-center mt-3 mb-3">Fundraising Dashboard</h2>
                    <div className="row g-5">

                        <div className="col-md-6">
                            <div className="card" >
                                <Link to="/viewfundraising">
                                    <img className="card-img-top" src={Viewfund} alt="Card image cap" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">View Fundraising</h5>
                                    <p className="card-text">By going through this you can view the ongoing fundraising and donate for them</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card" >
                                <Link to="/createfundraising">
                                    <img className="card-img-top" src={Createfund} alt="Card image cap" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Create Fundraising</h5>
                                    <p className="card-text">For the needs of our feloows let's create a new fundraising. It will help us to improve the humanity</p>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default FundraisingDashboard;