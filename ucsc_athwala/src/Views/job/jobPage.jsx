import React from 'react';
import './job.css';
// import Tab from './ProductTabs';
import Cause from './jobOpp';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import {Link, useHistory } from "react-router-dom";


export default function StuJobDashboard(){
    const history = useHistory();
    return(
        <div>
            <div><Nav /></div>
            <div style={{display:'flex'}}>
               <Side />
                <div className="container-fluid container-custom">
                    {/* <Tab /> */}
                    <div style={{marginTop:30}}>
                       <Cause /> 
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}