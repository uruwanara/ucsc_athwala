import React from 'react';
import './ProductView.css';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import Note from '../../image/mobileH.jpg';


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
                                        <h3>Huawei Phone</h3>
                                        <br />
                                        <h6>Huawei P30 Lite</h6>
                                        <h6>Price : Rs. 12 000.00</h6>
                                      
                                        <p class="card-text card-text-custom">
                                         6.1″ (1080×2312).4 Cameras.
                                         6GB RAM / Internal Memory: 128 GB.
                                          Non-removable Li-Po 3340 mAh battery.
                                          Black Colo.
                                        </p><br></br>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{ backgroundColor:'transparent',border:0}}>
                                    <img src={Note} alt="cap" class="card-img-top" style={{height:200,width:300,alignSelf:'center',marginTop:20}} ></img>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-md-6">
                                <div className="card" style={{backgroundColor:'transparent',border:0}}>
                                        <h3>Contact Details</h3>
                                        <div className="row">
                                            <div className="col-md-4"><label>Name : </label></div>
                                            <div className="col-md-8"><label>Gihan</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Batch No</label></div>
                                            <div className="col-md-8"><label>15 Batch</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Contact Number: </label></div>
                                            <div className="col-md-8"><label>071 8756010</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Email Address : </label></div>
                                            <div className="col-md-8"><label>gihancharuka@gmail.com</label></div>
                                        </div>
                                      
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="card" style={{ backgroundColor:'transparent',border:0}}>
                                    {/* <h3>Donate me</h3> */}
                                        <div className="row" style={{ padding:10,marginLeft:55,marginBottom:-57,marginTop:95}}>
                                            <div className="col-md-12"><button type="button" className="btn btn-custom">Add Card</button></div>
                                        </div>
                                        <div className="row" style={{ padding:10,marginLeft:200}}>
                                            <div className="col-md-12"><button type="button" className="btn btn-custom">Buy it Now</button></div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}