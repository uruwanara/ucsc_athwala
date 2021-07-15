import React from 'react';


import Cause from './chat';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import {Link, useHistory } from "react-router-dom";

export default function StuDashboard(){
//nimasha
    const history = useHistory();
    
    return(
        <div>
            <div><Nav /></div>
            <div style={{display:'flex'}}>
               <Side />
                <div className="container-fluid container-custom">
                    
                    <div style={{marginTop:30}}>
                       <Cause /> 
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}