import React from 'react';
import './Donation.css';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import Note from '../../image/note.jpg';


export default function View_Notecause(){
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
                                        <h3>My Details</h3>
                                        <div className="row">
                                            <div className="col-md-4"><label>Study year : </label></div>
                                            <div className="col-md-8"><label>2nd year</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Subject : </label></div>
                                            <div className="col-md-8"><label>DSA part 02</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4"><label>Specific lessons : </label></div>
                                            <div className="col-md-8"><label>All the lessons</label></div>
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
                                            <div className="col-md-12"><label>You are able to upload file here</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12"><input type="file" class="form-control-file" id="uploadFile"></input></div>
                                        </div><br></br>
                                        <div className="row">
                                            <div className="col-md-12"><button type="button" className="btn btn-custom">Donate</button></div>
                                        </div><br></br>
                                        <div className="row">
                                            <div className="col-md-12"><label>OR</label></div>
                                        </div><br></br>
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