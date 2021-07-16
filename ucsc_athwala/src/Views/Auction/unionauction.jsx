import React from 'react';
import './auction.css';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';


export default function Unionauction(){
    return(
        <body>
        <div>
            <div><Nav /></div>
            <Side />
            <div className="Auction">
            <p ><b>Bid now!</b></p></div>
            <div className="widgetSm1">
                <p>Seller Name</p>
                <div className="cs"><b>Uthpala Ruwanara</b></div> <img
                src="https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg"/>
                <div className="box"><div className="sell"><p><b>More About Seller</b></p></div>
                <p>Third year undergraduate</p>
                <div className="cs">Computer Science</div>
                <hr></hr></div>
                <div className="box1"><b><p>Item</p></b>
                <div className="laptop"><p>Laptop</p></div>
                <br></br>
                <p><b>Base Price</b></p>
                <div className="laptop"><p>30,000/=</p></div>
                
                </div>
                <div className="box20"><b><p>Auction Started At</p></b>
                <div className="laptop"><p>June 20 2021 at 10.00 A.M</p></div>
                <div className="clock"><h1><i class="bi bi-clock"></i></h1></div>
                
                <div className="day1"><p><b>Auction Ends At</b></p></div>
                <div className="day"><p>August 1 2021 at 10.00 A.M</p></div>
                <div className="sandclock"><h1><i class="bi bi-hourglass-split"></i></h1></div>
                </div>
                <div className="line10"><hr></hr></div>
                {/* <div className="bu1"><button class="button">Bid</button></div><div className="bu2"><button class="button">Back</button></div> */}
                <div className="box3"><br></br><h1><i class="bi bi-cash-coin"></i></h1><div className="bid"><h1>Highest Bid</h1></div>
                <p>Abises Weerasekara</p>
                June 20 2021 at 10.00 A.M
                <hr></hr>
                
                <div className="money"><p><center>Rs 50,000/=</center></p></div>
                
                </div>
                <div className="box4"><br></br><h1><i class="bi bi-cash-coin"></i></h1><div className="bid"><h1>Bid Now!!!</h1></div>
                <p>Enter The value</p>
                <div className="bid1"><center><input type="text"/></center>
                <br></br>
                <center><button class="button">Bid</button></center>
                </div>
                
                
                </div>
                </div>
            </div>
       </body> 
    );
}