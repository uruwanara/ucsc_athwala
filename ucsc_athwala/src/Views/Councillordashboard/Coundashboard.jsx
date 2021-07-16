import React from 'react';
import './Coundashboard.css';
import Side from '../CouncellorSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import {Link, useHistory } from "react-router-dom";



export default function PastStuDashboard(){
  const history = useHistory();
  return(
      <div>
          <div><Nav /></div>
          <div style={{display:'flex'}}>
              <Side />
              <div className="container container-custom">
                  <div><h5 className="welcome">Hi Councillor,  Nimasha Supunpraba !</h5></div>

                  <div>
                      <div className="title"><h5>Recently Contacted Students</h5></div>
                      <br />
                      <div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Batch No</th>
      <th scope="col">Index No</th>
      <th scope="col">Contacted Date</th>
      <th scope="col">View Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nimasha Supunpraba</td>
      <td>16 Batch</td>
      <td>18001654</td>
      <td>2020-06-11</td>
     
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
      <td>Nipuni Hansika</td>
      <td>15 Batch</td>
      <td>18001754</td>
      <td>2020-08-13</td>
      
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
    <td>Gihan Charuka</td>
      <td>15 Batch</td>
      <td>18001556</td>
      <td>2021-06-04</td>
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
    <td>Uthpala Ruwanara</td>
      <td>16 Batch</td>
      <td>18001954</td>
      <td>2020-02-11</td>
     
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
    <td>Dhanu Anjana</td>
      <td>16 Batch</td>
      <td>18001704</td>
      <td>2020-09-10</td>
      
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
    <td>Abises Weerasekara</td>
      <td>16 Batch</td>
      <td>18001543</td>
      <td>2020-06-21</td>
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
    <tr>
    <td>Anuradha Wikramasinhge</td>
      <td>16 Batch</td>
      <td>18201654</td>
      <td>2021-01-11</td>
      
      <td><button type="button" class="btn tb-btn">View</button></td>
    </tr>
  </tbody>
</table>

    </div>
                  </div>      
                  

           
                        
              </div>
          </div>
      </div>
  );
}