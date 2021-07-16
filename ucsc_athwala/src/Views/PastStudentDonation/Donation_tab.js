import React from 'react';
import './Donation.css';
import {Link, useHistory } from "react-router-dom";

export default function Donationtab(){
    const history = useHistory();
    return(
        <div>
           <ul className="nav nav-tabs">
           <li className="nav-item dropdown nav-item-custom">
                    <Link to="/pstDonation" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">All Causes</Link>
                    <div className="dropdown-menu dropdown-menu-custom">
                    <Link to="/pstDonation" className="dropdown-item">All</Link>
                    <Link to="/pstDonation" className="dropdown-item">Lecture note</Link>
                    <Link to="/pstDonation" className="dropdown-item">Cloths</Link>
                    <Link to="/pstDonation" className="dropdown-item">Electric devices</Link>
                    <Link to="/pstDonation" className="dropdown-item">Money</Link>
                    <Link to="/pstDonation" className="dropdown-item">Other</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}