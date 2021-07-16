import React from 'react';
import './Donation.css';
import {Link, useHistory } from "react-router-dom";

export default function Donationtab(){
    const history = useHistory();
    return(
        <div>
           <ul className="nav nav-tabs">
           <li className="nav-item dropdown nav-item-custom">
                    <Link to="/unionviewcauses" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">All Causes</Link>
                    <div className="dropdown-menu dropdown-menu-custom">
                    <Link to="/unionviewcauses" className="dropdown-item">All</Link>
                    <Link to="/unionviewcauses" className="dropdown-item">Lecture note</Link>
                    <Link to="/unionviewcauses" className="dropdown-item">Cloths</Link>
                    <Link to="/unionviewcauses" className="dropdown-item">Electric devices</Link>
                    <Link to="/unionviewcauses" className="dropdown-item">Money</Link>
                    <Link to="/unionviewcauses" className="dropdown-item">Other</Link>
                    </div>
                </li>
                <li className="nav-item dropdown nav-item-custom">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Request Donation</a>
                    <div className="dropdown-menu dropdown-menu-custom">
                    <Link to="/unionrequestNote" className="dropdown-item">Lecture note</Link>
                    <Link to="/unionrequestCloth" className="dropdown-item">Cloths</Link>
                    <Link to="/unionrequestDevice" className="dropdown-item">Electric devices</Link>
                    <Link to="/unionrequestMoney" className="dropdown-item">Money</Link>
                    <Link to="/unionrequestOther" className="dropdown-item">Other</Link>
                    </div>
                </li>
                <li className="nav-item dropdown nav-item-custom">
                    <Link to="/unionviewMyrequest" className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">My requesting</Link>
                    <div className="dropdown-menu dropdown-menu-custom">
                    <Link to="/unionviewMyrequest" className="dropdown-item">Lecture note</Link>
                    <Link to="/unionviewMyrequest" className="dropdown-item">Cloths</Link>
                    <Link to="/unionviewMyrequest" className="dropdown-item">Electric devices</Link>
                    <Link to="/unionviewMyrequest" className="dropdown-item">Money</Link>
                    <Link to="/unionviewMyrequest" className="dropdown-item">Other</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}