import React from 'react';
import '../css/sidebar.css';

export default function Side() {
    return(
    <div className="sidebar-custom">
                <a href="#about"> <i className="fa fa-tachometer" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Dashboard</a>
                <a href="#contact"> <i className="fa fa-video-camera" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> Video conference</a>
                <a href="#contact"> <i className="fa fa-question-circle" aria-hidden="true" style={{color:'#ff6411',padding:10}}></i> QA support</a>
    </div>
    );
}
