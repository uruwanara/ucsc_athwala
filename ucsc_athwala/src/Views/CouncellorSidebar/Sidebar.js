import React from 'react';
import '../../css/sidebar.css';
import {Link, useHistory } from "react-router-dom";


export default function Side() {
    const history = useHistory();
    return(
    <div className="sidebar-custom">
                <Link to="/Coundashboard"><i className="fa fa-tachometer" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Dashboard</Link>
                <Link to="/CounContactStu"> <i className="fa fa-video-camera" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Contact Student</Link>
                <a href="#contact"> <i className="fa fa-question-circle" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> QA support</a>
    </div>
    );
}