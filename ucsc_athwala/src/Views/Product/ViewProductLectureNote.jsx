import React from 'react';
import './ProductView.css';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import Note from '../../image/note1.jpg';
import {Link, useHistory } from "react-router-dom";


export default function StuDashboard(){
    const history = useHistory();
    return(
        <div>
            <div><Nav /></div>
            <div style={{display:'flex'}}>
                <Side />
                <div className="container container-custom"> 
                    
                        <div className="row" style={{ backgroundColor:'#f5f3f4'}}>
                            
                            <div className="col-md-7">
                                <div className="card" style={{backgroundColor:'transparent',border:0}}>
                                        <h3>DSA part 02 Lecture Note</h3>
                                        <p class="card-text card-text-custom">
                                        I,m a second year student. I have exam on next month. I miss some lectures because i was in sick condition.
                                        so i need DSA part 02 lecture notes.
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
                                            <div className="col-md-8"><label>Nimasha</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Batch No</label></div>
                                            <div className="col-md-8"><label>16 Batch</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Contact Number: </label></div>
                                            <div className="col-md-8"><label>071 6119055</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Email Address : </label></div>
                                            <div className="col-md-8"><label>nimashasupunpraba@gmail.com</label></div>
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