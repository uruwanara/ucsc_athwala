import React from 'react';
import './Donation.css';
import Nav from '../Navbar/Navbar';
import Side from '../UnionSidebar/UnionStudentSidebar';
import Tab from './Donation_tab';
import Clothform from './Request_Clothform';

export default function RequestNote(){
    return(
    <div>
        <div><Nav /></div>
            <div style={{display:'flex'}}>
               <Side />
                <div className="container-fluid container-custom">
                    <Tab />
                    <div style={{marginTop:30}}>
                      <Clothform />  
                    </div>

                </div>
            </div>
    </div>
    );
}

