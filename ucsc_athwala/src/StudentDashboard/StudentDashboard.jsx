import React from 'react';
import './StudentDashboard.css';
import Note from '../image/note.jpg';
import Cloth from '../image/cloth.jpg';
import Device from '../image/device.jpg';
import Money from '../image/money.jpg';
import Side from '../StudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import Event from '../image/Vaani-Vizha.jpg';

export default function StuDashboard(){
    return(
        <div>
            <div><Nav /></div>
            <div style={{display:'flex'}}>
                <Side />
                <div className="container container-custom">
                    <div><h5 className="welcome">Hi Dhanu Anjana !</h5></div>
                    <div className="title"><h5>Explore and donate today!</h5></div>
                    <div><p class="h6 font-italic text-success">Categories</p></div>
                    <div class="card-group">
                    <div class="card-deck">
                            <div class="card">
                                <img src={Note} alt="cap" class="card-img-top" style={{height:150}} ></img>
                                <div class="card-body">
                                <h5 class="card-title">Lecture Note</h5>
                                <div class="card-footer card-footer-custom"><button type="button" class="btn btn-warning btn-block">Donate today</button></div>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={Cloth} alt="cap" style={{height:150}}></img>
                                <div class="card-body">
                                <h5 class="card-title">Cloths</h5>
                                <div class="card-footer card-footer-custom"><button type="button" class="btn btn-warning btn-block">Donate today</button></div>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={Device} alt="cap" style={{height:150}}></img>
                                <div class="card-body">
                                <h5 class="card-title">Electronic Devices</h5>
                                <div class="card-footer card-footer-custom"><button type="button" class="btn btn-warning btn-block">Donate today</button></div>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={Money} alt="cap" style={{height:150}}></img>
                                <div class="card-body">
                                <h5 class="card-title">Money</h5>
                                <div class="card-footer card-footer-custom"><button type="button" class="btn btn-warning btn-block">Donate today</button></div>
                                </div>
                            </div>
                    </div>
                    </div>

                    <div>
                        <div className="title"><h5>Fundraising event!</h5></div>
                        <div><p class="h6 font-italic text-success">Most popular</p></div>
                        <div class="card-group">
                                <div class="card" style={{backgroundColor:'#edf2fb',border:0}}>
                                    <img src={Event} alt="cap" class="card-img-top" style={{height:150,width:300,alignSelf:'center'}} ></img>
                                </div>
                                <div class="card" style={{backgroundColor:'#edf2fb',border:0}} >
                                    <p class="card-text" style={{marginTop:10,marginLeft:30,marginRight:0,color:'black',padding:0}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card" style={{backgroundColor:'#edf2fb',border:0}}>
                                <div><p class="card-text text-center text-danger font-weight-bold" style={{margin:10,color:'black',alignSelf:'left'}}>Raised : Rs.5000</p></div>
                                <div><p class="card-text text-center text-success font-weight-bold" style={{margin:10,color:'black',alignSelf:'left'}}>Goal : Rs.15000</p></div>
                                <div className="btn-custom" style={{alignSelf:'center'}}><button type="button" class="btn btn-warning btn-sm">Donate today</button></div>
                                </div>
                        </div>
                    </div>       
                </div>
            </div>
        </div>
    );
}