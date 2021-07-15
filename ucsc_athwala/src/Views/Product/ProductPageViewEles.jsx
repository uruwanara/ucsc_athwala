import React from 'react';
import './ProductView.css';
import Tab from './ProductTabs';
import Cause from './ProductEleView';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';


export default function StuDashboard(){
    return(
        <div>
            <div><Nav /></div>
            <div style={{display:'flex'}}>
               <Side />
                <div className="container-fluid container-custom">
                    <Tab />
                    <div style={{marginTop:30}}>
                       <Cause /> 
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}