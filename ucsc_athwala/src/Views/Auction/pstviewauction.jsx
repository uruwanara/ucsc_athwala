import React from 'react';
import './Viewauction.css';
import Side from '../PastStudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import {Link, useHistory } from "react-router-dom";


export default function Pstviewauction(){
    const history = useHistory();
    return(
        <body>
        <div>
            <div><Nav /></div>
            <Side />
            <div className="Auction">
            <p ><b>Auctions</b></p></div>
            <div className="widgetSm">
                <p>Seller Name</p>
                <div className="cs"><b>Uthpala Ruwanara</b></div><img
                src="https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg"/>
                <div className="box"><div className="sell"><p><b>More About Seller</b></p></div>
                <p>Third year undergraduate</p>
                <div className="cs">Computer Science</div>
                <Link to="/auctionpst"><div className="view"><p>View More <i class="bi bi-arrow-right-circle"></i></p></div></Link>
                <hr></hr></div>
                <div className="box2">
                <p>Seller Name</p>
                <div className="cs"><b>Dhanu anjana</b></div><img
                src="https://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/aAMAAOSwq1JZJXhB/$_57.JPG"/>
                <div className="box"><div className="sell"><p><b>More About Seller</b></p></div>
                <p>Third year undergraduate</p>
                <div className="cs">Computer Science</div></div>
                <div className="view1"><p>View More <i class="bi bi-arrow-right-circle"></i></p></div>
                <div className="line1"><hr></hr></div></div>
                <div className="box10">
                <p>Seller Name</p>
                <div className="cs"><b>Abises Weerasekara</b></div><img
                src="https://miro.medium.com/max/1250/1*4r4x8mggXOEYz1vU7tCdAw.jpeg"/>
                <div className="box"><div className="sell"><p><b>More About Seller</b></p></div>
                <p>Third year undergraduate</p>
                <div className="cs">Computer Science</div></div>
                <div className="view1"><p>View More <i class="bi bi-arrow-right-circle"></i></p></div>
                <div className="line1"><hr></hr></div></div>
        
                </div>
                </div>
       </body> 
    );
}