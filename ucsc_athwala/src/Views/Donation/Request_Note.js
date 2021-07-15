import React from 'react';
import './Donation.css';
import Nav from '../Navbar/Navbar';
import Side from '../StudentSidebar/Sidebar';
import Tab from './Donation_tab';
import Noteform from './Request_Noteform';

export default function RequestNote(){
    return(
    <div>
        <div><Nav /></div>
            <div style={{display:'flex'}}>
               <Side />
                <div className="container-fluid container-custom">
                    <Tab />
                    <div style={{marginTop:30}}>
                      <Noteform />  
                    </div>

                </div>
            </div>
    </div>
    );
}

