import React from 'react';
import '../../css/navbar.css';

export default function Navbar() {
    return(
        <div>
           <nav className="navbar navbar-expand-sm justify-content-end navbar-custom">
               <div><ul className="navbar-nav">
                    
                <li className="nav-item nav-item-custom">
                <div className="dropdown" style={{float:"right"}}>
                    <i className="fa fa-user-circle fa-2x" aria-hidden="true" style={{paddingRight:40,color:'#ffffff'}}></i>
                    
                    <div className="dropdown-content">
                        <a href="#profile"><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
                        <a href="#logout"><i class="fa fa-sign-out" aria-hidden="true"></i> Sign out</a>
                    </div>
                </div>
                </li>
                
                </ul></div>
                
            </nav> 
        </div>
        
    );
}
