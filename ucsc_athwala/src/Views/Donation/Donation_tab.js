import React from 'react';
import './Donation.css';

export default function Donationtab(){
    return(
        <div>
           <ul className="nav nav-tabs">
           <li className="nav-item dropdown nav-item-custom">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#all" role="button" aria-haspopup="true" aria-expanded="false">All Causes</a>
                    <div className="dropdown-menu dropdown-menu-custom">
                    <a className="dropdown-item" href="#all">All</a>
                    <a className="dropdown-item" href="#note">Lecture note</a>
                    <a className="dropdown-item" href="#cloth">Cloths</a>
                    <a className="dropdown-item" href="electric">Electric devices</a>
                    <a className="dropdown-item" href="money">Money</a>
                    <a className="dropdown-item" href="other">Other</a>
                    </div>
                </li>
                <li className="nav-item dropdown nav-item-custom">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#note" role="button" aria-haspopup="true" aria-expanded="false">Request Donation</a>
                    <div className="dropdown-menu dropdown-menu-custom">
                    <a className="dropdown-item" href="#note">Lecture note</a>
                    <a className="dropdown-item" href="#cloth">Cloths</a>
                    <a className="dropdown-item" href="electric">Electric devices</a>
                    <a className="dropdown-item" href="money">Money</a>
                    <a className="dropdown-item" href="other">Other</a>
                    </div>
                </li>
                <li className="nav-item dropdown nav-item-custom">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#note" role="button" aria-haspopup="true" aria-expanded="false">My requesting</a>
                    <div className="dropdown-menu dropdown-menu-custom">
                    <a className="dropdown-item" href="#note">Lecture note</a>
                    <a className="dropdown-item" href="#cloth">Cloths</a>
                    <a className="dropdown-item" href="electric">Electric devices</a>
                    <a className="dropdown-item" href="money">Money</a>
                    <a className="dropdown-item" href="other">Other</a>
                    </div>
                </li>
            </ul>
        </div>
    );
}