import React from 'react';
import './Donation.css';
import Side from '../PastStudentSidebar/Sidebar';

import Nav from '../Navbar/Navbar';
import Cloth from '../../image/cloth.jpg';


export default function View_Clothcause(){
    return(
        <div>
            <div><Nav /></div>
            <div style={{display:'flex'}}>
                <Side />
                <div className="container container-custom"> 
                    
                        <div className="row" style={{ backgroundColor:'#f5f3f4'}}>
                            
                            <div className="col-md-7">
                                <div className="card" style={{backgroundColor:'transparent',border:0}}>
                                        <h3>Office Trousers</h3>
                                        <p class="card-text card-text-custom">
                                            I'm a second year student. I have presentation on next month. i need office trousers for that. if someone 
                                            has additional one please donate me.
                                        </p><br></br>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{ backgroundColor:'transparent',border:0}}>
                                    <img src={Cloth} alt="cap" class="card-img-top" style={{height:200,width:300,alignSelf:'center',marginTop:20}} ></img>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-md-6">
                                <div className="card" style={{backgroundColor:'transparent',border:0}}>
                                        <h3>My Details</h3>
                                        <div className="row">
                                            <div className="col-md-4"><label>Cloth type : </label></div>
                                            <div className="col-md-8"><label>Trouser</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Gender : </label></div>
                                            <div className="col-md-8"><label>Female</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Size : </label></div>
                                            <div className="col-md-8"><label>M (Width:20" Length:28")</label></div>
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
                                            <div className="col-md-12"><button type="button" className="btn btn-custom">Contact to send</button></div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}