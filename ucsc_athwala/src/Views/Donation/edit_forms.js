import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import { useLocation } from 'react-router';
  import EditNote from './edit_Noteform';
  import EditCloth from './edit_Clothform';
  import EditDevice from './edit_Deviceform';
  import EditMoney from './edit_Money';
  import EditOther from './edit_Other';

  export default function RequestNote(){
    const search = useLocation().search;
    const donationid = new URLSearchParams(search).get("id");
    const type = new URLSearchParams(search).get("type");

    const loadform = () => {
        if (type === 'note'){
            return(
                <EditNote donationid={donationid} type={type}/>
            )
        }
        if (type === 'cloth'){
            return(
                <EditCloth donationid={donationid} type={type}/>
            )
        }
        if (type === 'device'){
            return(
                <EditDevice donationid={donationid} type={type}/>
            )
        }
        if (type === 'money'){
            return(
                <EditMoney donationid={donationid} type={type}/>
            )
        }
        if (type === 'other'){
            return(
                <EditOther donationid={donationid} type={type}/>
            )
        }
    }

    return(
        <>
        {loadform()}
        </>
        
    );
}