import React from 'react';
import './creatauction.css';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';


export default function Stdcreateauc(){
    return(
        <body>
        <div>
            <div><Nav /></div>
            <Side />
            <div className="Auction">
            <p ><b>Create Auctions</b></p></div>
            <div className="widgetSm2">
            <form>
                <div className="namebox">
  <label>
    Name :
    <input type="text" name="name" />
  </label>
  <br></br><br></br>
  <label>
    Start date :
    <input type="text" name="name" />
  </label>
  <br></br><br></br>
  <label>
    End date :
    <input type="text" name="name" />
  </label>
  <br></br><br></br>
  <label>
    Base Price :
    <input type="text" name="name" />
  </label>
  <br></br><br></br>
  <label>
    Choose Image:
  <input type="file" />
  </label>
  <br></br><br></br>
  <input type="submit" value="Submit" />
  </div>
    </form>
                </div>
                </div>
       </body> 
    );
}