import React from 'react';
import './Admindash.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
import Side from '../AdminSidebar/Sidebar';
import Nav from '../Navbar/Navbar';


export default function StuDashboard(){
    const data = [
        {
            name: "Jan",
            "Active User": 4000,
          },
          {
            name: "Feb",
            "Active User": 3000,
          },
          {
            name: "Mar",
            "Active User": 5000,
          },
          {
            name: "Apr",
            "Active User": 4000,
          },
          {
            name: "May",
            "Active User": 3000,
          },
          {
            name: "Jun",
            "Active User": 2000,
          },
          {
            name: "Jul",
            "Active User": 4000,
          },
          {
            name: "Agu",
            "Active User": 3000,
          },
          {
            name: "Sep",
            "Active User": 4000,
          },
          {
            name: "Oct",
            "Active User": 1000,
          },
          {
            name: "Nov",
            "Active User": 4000,
          },
          {
            name: "Dec",
            "Active User": 3000,
          },
      ];
    return(
        <div>
            <div><Nav /></div>
            <div style={{display:'flex'}}>
                <Side />
                <div className="container container-custom">
                    <div><h5 className="welcome">Admin Dashboard</h5></div>
                    <br></br><br></br>
                    <div><p class="h6 font-italic text-success">Today Stats</p></div>
                    
                    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle" >Today User Engagements To The System</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" >250</span>
          <span className="featuredMoneyRate">
          <i class="bi bi-people"></i>
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Number of Auctions to approve</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" >4</span>
          <span className="featuredMoneyRate">
          <i class="bi bi-bookmark-check-fill"></i>
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Number Of Posts Reported By Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">25</span>
          <span className="featuredMoneyRate">
          <i class="bi bi-emoji-angry"></i>
          </span>
        </div>
      </div>
    </div>
    <div className="chart">
      <h3 className="chartTitle">User Engagements In Every Months</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={"Active User"} stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="widgetSm">
        <span className="featuredTitle" >Active users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" > <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="widgetSmImg"
          /></span>
          <br></br>
          <span className="name"> Anuradha Wickramasinghe   </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoneyRate">
          <i class="bi bi-envelope"></i>
          <br></br>
          </span>
          </div>
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" > <img
            src="https://www.rollingstone.com/wp-content/uploads/2021/06/GettyImages-1153778011.jpg?resize=1800,1200&w=450"
            alt=""
            className="widgetSmImg"
          /></span>
          <br></br>
          <span className="name">Chanakya Wickramasinghe</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoneyRate">
              <span></span>
          <i class="bi bi-envelope"></i>
          <br></br>
          </span>
          </div>
        </div>
      
      </div>
      

    
                </div>
            </div>
            
        </div>
        
        
        
    );
}