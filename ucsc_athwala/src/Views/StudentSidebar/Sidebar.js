import React from 'react';
import '../../css/sidebar.css';
import {Link, useHistory } from "react-router-dom";

export default function Side() {

    const history = useHistory();

    return(
    <div className="sidebar-custom">
          
                <Link to="/stddashboard"> <i  className="fa fa-tachometer" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Dashboard </Link>
        <Link to="/viewdonations"> <i className="fa fa-users" aria-hidden="true" style={{color:'#ff6411' ,padding:10}}></i> Donation</Link>
        <Link to="">    <i className="fa fa-shopping-cart" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Product</Link>
        <Link to="">   <i className="fa fa-gavel" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Auction</Link>
        <Link to="">   <i className="fa fa-flag" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Fundrasing</Link>
        <Link to="">   <i className="fa fa-handshake-o" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Job oppertunity</Link>
        <Link to="">    <i className="fa fa-video-camera" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Learning Groups</Link>
        <Link to="">      <i className="fa fa-comments" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Chat</Link>
     <Link to="">       <i className="fa fa-list-alt" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> UCSC help stack</Link>
        <Link to="">     <i className="fa fa-question-circle" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> QA support</Link>
        <Link to="">    <i className="fa fa-video-camera" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Contact Councellor</Link>
    </div>
    );
}