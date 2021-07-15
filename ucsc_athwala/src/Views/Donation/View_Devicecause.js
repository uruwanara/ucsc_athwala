import React from 'react';
import './Donation.css';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import Device from '../../image/device.jpg';


export default function View_Devicecause(){
    return(
        <div>
            <div><Nav /></div>
            <div style={{display:'flex'}}>
                <Side />
                <div className="container container-custom"> 
                    
                        <div className="row" style={{ backgroundColor:'#f5f3f4'}}>
                            
                            <div className="col-md-7">
                                <div className="card" style={{backgroundColor:'transparent',border:0}}>
                                        <h3>Mobile phone</h3>
                                        <p class="card-text card-text-custom">
                                            I'm a first year student. i lost my mobile phone in the train yesterday.i'm not able to buy a new phone
                                            imediately. if someone has a used phone please donate me.
                                        </p><br></br>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{ backgroundColor:'transparent',border:0}}>
                                    <img src={Device} alt="cap" class="card-img-top" style={{height:200,width:300,alignSelf:'center',marginTop:20}} ></img>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-md-6">
                                <div className="card" style={{backgroundColor:'transparent',border:0}}>
                                        <h3>My Details</h3>
                                        <div className="row">
                                            <div className="col-md-4"><label>Model of device : </label></div>
                                            <div className="col-md-8"><label>Android</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Brand name : </label></div>
                                            <div className="col-md-8"><label>Any</label></div>
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