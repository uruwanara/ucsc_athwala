import React from 'react';
import '../../css/navbar.css';
import {Link, useHistory } from "react-router-dom";

export default function Navbar() {
    return(
        <div>
           <nav className="navbar navbar-expand-sm justify-content-end navbar-custom">
               <div><h5 style={{paddingRight:1250,color:'#000000', fontWeight: 'bold',textShadow:'2px 2px #ffffff'}}>UCSC Athwala </h5></div>
               <div><ul className="navbar-nav">
                    
                <li className="nav-item nav-item-custom">
                <div className="dropdown" style={{float:"right"}}>
                    <i className="fa fa-user-circle fa-2x" aria-hidden="true" style={{paddingRight:40,color:'#ffffff'}}></i>
                    
                    <div className="dropdown-content">
                        <a href="#profile"><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
                        <Link to="/login"> <i class="fa fa-sign-out" aria-hidden="true"></i> Sign out</Link>
                    </div>
                </div>
                </li>
                
                </ul></div>
                
            </nav> 
        </div>
        
    );
}
