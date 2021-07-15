import React from 'react';
import './Donation.css';
import Nav from '../Navbar/Navbar';
import Side from '../StudentSidebar/Sidebar';
import Tab from './Donation_tab';
import Moneyform from './Request_Moneyform';

export default function RequestNote(){
    return(
    <div>
        <div><Nav /></div>
            <div style={{display:'flex'}}>
               <Side />
                <div className="container-fluid container-custom">
                    <Tab />
                    <div style={{marginTop:30}}>
                      <Moneyform />  
                    </div>

                </div>
            </div>
    </div>
    );
}

