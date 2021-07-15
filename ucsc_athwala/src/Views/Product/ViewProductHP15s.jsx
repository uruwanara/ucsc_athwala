import React from 'react';
import './ProductView.css';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import Note from '../../image/laptopHP15.jpg';


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
                                        <h3>HP Laptop</h3>
                                        <br />
                                        <h6>HP 15s-Eq1086tu</h6>
                                        <h6>Price : Rs. 37 000.00</h6>
                                      
                                        <p class="card-text card-text-custom">
                                        ntel Celeron N4020 (up to 2.8 GHz) Processor.
                                        ntel® Core i5-10210U (up to 4.2 GHz  6 MB 4 cores) processor.  
                                        8 GB DDR4-2666 SDRAM(1x8GB), 1 TB 5400 RPM HDD.
                                        15.6" diagonal FHD IPS.
                                        1 TB 5400 RPM HDD.
                                        Windows 10 Home.
                                        TB 5400 rpm SATA HDD                                        Fingerprint Sensor.
                                        HP Long Life 3-cell, 41 Wh Li-ion Battery.

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
                                            <div className="col-md-8"><label>Danu</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Batch No</label></div>
                                            <div className="col-md-8"><label>16 Batch</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Contact Number: </label></div>
                                            <div className="col-md-8"><label>071 8711122</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Email Address : </label></div>
                                            <div className="col-md-8"><label>danuprabas@gmail.com</label></div>
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