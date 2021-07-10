import React from 'react';
import '../css/sidebar.css';

export default function Side() {
    return(
    <div className="sidebar-custom">
          
                <a href="#about"> <i className="fa fa-tachometer" aria-hidden="true" style={{color:'orange',padding:10}}></i> Dashboard</a>
                <a href="#services"> <i className="fa fa-users" aria-hidden="true" style={{color:'orange' ,padding:10}}></i> Donation</a>
                <a href="#clients"> <i className="fa fa-shopping-cart" aria-hidden="true" style={{color:'orange',padding:10}}></i> Product</a>
                <a href="#contact"> <i className="fa fa-gavel" aria-hidden="true" style={{color:'orange',padding:10}}></i> Auction</a>
                <a href="#contact"> <i className="fa fa-flag" aria-hidden="true" style={{color:'orange',padding:10}}></i> Fundrasing</a>
                <a href="#contact"> <i className="fa fa-video-camera" aria-hidden="true" style={{color:'orange',padding:10}}></i> Video conference</a>
                <a href="#contact"> <i className="fa fa-comments" aria-hidden="true" style={{color:'orange',padding:10}}></i> Chat</a>
                <a href="#contact"> <i className="fa fa-list-alt" aria-hidden="true" style={{color:'orange',padding:10}}></i> UCSC help desk</a>
                <a href="#contact"> <i className="fa fa-question-circle" aria-hidden="true" style={{color:'orange',padding:10}}></i> QA support</a>
    </div>
    );
}