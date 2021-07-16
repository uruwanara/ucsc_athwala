import React from 'react';
import './Donation.css';
import Side from '../PastStudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import Money from '../../image/money.jpg';


export default function StuDashboard(){
    return(
        <div>
            <div><Nav /></div>
            <div style={{display:'flex'}}>
                <Side />
                <div className="container container-custom"> 
                    
                        <div className="row" style={{ backgroundColor:'#f5f3f4'}}>
                            
                            <div className="col-md-7">
                                <div className="card" style={{backgroundColor:'transparent',border:0}}>
                                        <h3>help with money for course fees </h3>
                                        <p class="card-text card-text-custom">
                                            I'm a second year student. I follow Bussiness Managment course. i did some part time job to 
                                            pay the fees but due to this pandemic situation i couldn't find my fees. i have to pay the course 
                                            fees in next month. so if someone like to help, please donate me. 
                                        </p><br></br>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{ backgroundColor:'transparent',border:0}}>
                                    <img src={Money} alt="cap" class="card-img-top" style={{height:200,width:300,alignSelf:'center',marginTop:20}} ></img>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-md-6">
                                <div className="card" style={{backgroundColor:'transparent',border:0}}>
                                        <h3>My Details</h3>
                                        <div className="row">
                                            <div className="col-md-4"><label>Amount : </label></div>
                                            <div className="col-md-8"><label>7800</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Special Note : </label></div>
                                            <div className="col-md-8"><label>Imdeiate</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Before around : </label></div>
                                            <div className="col-md-8"><label>2021-08-12</label></div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="card" style={{ backgroundColor:'transparent',border:0}}>
                                    <h3>Donate me</h3>
                                        <div className="row">
                                            <div className="col-md-12"><button type="button" className="btn btn-custom">Donate Now</button></div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}