import React from 'react';
import './ProductView.css';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import Note from '../../image/mobileS.jpg';


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
                                        <h3>Samsung Phone</h3>
                                        <br />
                                        <h6>Samsung Galaxy A12</h6>
                                        <h6>Price : Rs. 17 000.00</h6>
                                      
                                        <p class="card-text card-text-custom">
                                        Android 10. 
                                        64GB RAM.
                                        microSDXC (dedicated slot).
                                        6.5 inches,720 x 1600 pixels, 20:9 ratio (~270 ppi density).
                                        8 MP, f/2.2 Front camera.
                                        48 MP, f/2.0, 26mm (wide), AF;
                                        5 MP, f/2.2, 123° (ultrawide);
                                        2 MP, f/2.4, (macro);
                                        2 MP, f/2.4, (depth) Rear camera.
                                        Li-Po 5000 mAh, non-removable, Fast charging 15W.
                                        Fingerprint (side-mounted), accelerometer.
                            
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
                                            <div className="col-md-8"><label>Janani</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Batch No</label></div>
                                            <div className="col-md-8"><label>14 Batch</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Contact Number: </label></div>
                                            <div className="col-md-8"><label>076 8742933</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Email Address : </label></div>
                                            <div className="col-md-8"><label>punkalajanani@gmail.com</label></div>
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