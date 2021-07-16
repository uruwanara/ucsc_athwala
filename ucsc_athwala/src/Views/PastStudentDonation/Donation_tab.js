import React from 'react';
import './Donation.css';
import {Link, useHistory } from "react-router-dom";

export default function Donationtab(){
    const history = useHistory();
    return(
        <div>
           <ul className="nav nav-tabs">
           <li className="nav-item dropdown nav-item-custom">
                    <Link to="/viewcauses" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">All Causes</Link>
                    <div className="dropdown-menu dropdown-menu-custom">
                    <Link to="/viewcauses" className="dropdown-item">All</Link>
                    <Link to="/viewcauses" className="dropdown-item">Lecture note</Link>
                    <Link to="/viewcauses" className="dropdown-item">Cloths</Link>
                    <Link to="/viewcauses" className="dropdown-item">Electric devices</Link>
                    <Link to="/viewcauses" className="dropdown-item">Money</Link>
                    <Link to="/viewcauses" className="dropdown-item">Other</Link>
                    </div>
                </li>
                <li className="nav-item dropdown nav-item-custom">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Request Donation</a>
                    <div className="dropdown-menu dropdown-menu-custom">
                    <Link to="/requestNote" className="dropdown-item">Lecture note</Link>
                    <Link to="/requestCloth" className="dropdown-item">Cloths</Link>
                    <Link to="/requestDevice" className="dropdown-item">Electric devices</Link>
                    <Link to="/requestMoney" className="dropdown-item">Money</Link>
                    <Link to="/requestOther" className="dropdown-item">Other</Link>
                    </div>
                </li>
                <li className="nav-item dropdown nav-item-custom">
                    <Link to="/viewMyrequest" className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">My requesting</Link>
                    <div className="dropdown-menu dropdown-menu-custom">
                    <Link to="/viewMyrequest" className="dropdown-item">Lecture note</Link>
                    <Link to="/viewMyrequest" className="dropdown-item">Cloths</Link>
                    <Link to="/viewMyrequest" className="dropdown-item">Electric devices</Link>
                    <Link to="/viewMyrequest" className="dropdown-item">Money</Link>
                    <Link to="/viewMyrequest" className="dropdown-item">Other</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}