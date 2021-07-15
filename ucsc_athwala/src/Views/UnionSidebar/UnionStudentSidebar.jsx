import React from 'react';
import '../../css/sidebar.css';
import {Link, useHistory } from "react-router-dom";

export default function UnionStudentSidebar() {
    const history = useHistory();
    return (
        <div className="sidebar-custom">
            <Link to="/unionDashobard"> <i className="fa fa-tachometer" aria-hidden="true" style={{ color: '#ff6411', padding: 10 }}></i> Dashboard</Link>
            <Link to="/viewcauses"> <i className="fa fa-users" aria-hidden="true" style={{ color: '#ff6411', padding: 10 }}></i> Donation</Link>
            <Link to="/ViewEleProduct"><i className="fa fa-shopping-cart" aria-hidden="true" style={{ color: '#ff6411', padding: 10 }}></i> Product</Link>
            <a href="#contact"> <i className="fa fa-gavel" aria-hidden="true" style={{ color: '#ff6411', padding: 10 }}></i> Auction</a>
            <a href="#contact"> <i className="fa fa-flag" aria-hidden="true" style={{ color: '#ff6411', padding: 10 }}></i> Fundrasing</a>
            <a href="#contact"> <i className="fa fa-handshake-o" aria-hidden="true" style={{ color: '#ff6411', padding: 10 }}></i> Job oppertunity</a>
            <a href="#contact"> <i className="fa fa-video-camera" aria-hidden="true" style={{ color: '#ff6411', padding: 10 }}></i> Video conference</a>
            <Link to="/Chat"> <i className="fa fa-comments" aria-hidden="true" style={{ color: '#ff6411', padding: 10 }}></i> Chat</Link>
            <a href="#contact"> <i className="fa fa-list-alt" aria-hidden="true" style={{ color: '#ff6411', padding: 10 }}></i> UCSC help desk</a>
            <a href="#contact"> <i className="fa fa-question-circle" aria-hidden="true" style={{ color: '#ff6411', padding: 10 }}></i> QA support</a>
        </div>
    );
}
