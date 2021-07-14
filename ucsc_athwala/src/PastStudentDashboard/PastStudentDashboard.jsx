import React from 'react';
import './PastStudentDashboard.css';
import Note from '../image/note.jpg';
import Cloth from '../image/cloth.jpg';
import Device from '../image/device.jpg';
import Money from '../image/money.jpg';
import Side from '../PastStudentSidebar/Sidebar';
import Nav from '../Navbar/Navbar';
import Event from '../image/job.jpg';

export default function PastStuDashboard(){
    return(
        <div>
            <div><Nav /></div>
            <div style={{display:'flex'}}>
                <Side />
                <div className="container container-custom">
                    <div><h5 className="welcome">Hi Nimasha Supunpraba !</h5></div>

                    <div>
                        <div className="title"><h5>Create Job Vacancy</h5></div>
                        
                        <div class="card-group">
                                <div class="card" style={{backgroundColor:'#e9ecef',border:0}}>
                                    <br />
                                    <img src={Event} alt="cap" class="card-img-top" style={{height:150,width:300,alignSelf:'left',marginTop:15,marginLeft:35}} ></img>
                                </div>
                                <div class="card" style={{backgroundColor:'#e9ecef',border:0}} >
                                    <p class="card-text" style={{marginTop:10,marginLeft:30,marginRight:0,color:'#495057',fontFamily:'Poppins, sans-serif',padding:0,fontSize:15}}>
                                        <br />
                                    <h5 style={{color:'black'}}>Is There Any New Opportunity</h5>
                                    <hr />
                                        3rd year students of UCSC organize Vani Viza tamil festival every year.In this year they are planing to held it on
                                        23rd of August, 2021. Thie event will be a good opperunity to create unity among the badges.</p><br></br>
                                </div>
                                <div class="card" style={{backgroundColor:'#e9ecef',border:0}}>
                                {/* <div><p class="card-text text-center" style={{margin:10,color:'#343a40',alignSelf:'left',fontFamily:'Poppins, sans-serif'}}>Raised : Rs.5000</p></div> */}
                                {/* <div><p class="card-text text-center" style={{margin:10,color:'#343a40',alignSelf:'left',fontFamily:'Poppins, sans-serif'}}>Goal : Rs.15000</p></div> */}
                                <div className="btn-custom" style={{alignSelf:'center'}}><button type="button" class="btn btn-md">Add New Job Advertisment</button></div>
                                </div>
                        </div>
                    </div> 

                    <div className="title"><h5>Explore and donate today</h5></div>
                    
                    <div class="card-group">
                    <div class="card-deck">
                            <div class="card">
                                <img src={Note} alt="cap" class="card-img-top" style={{height:150}} ></img>
                                <div class="card-body">
                                <h5 class="card-title">Lecture Note</h5>
                                <div class="card-footer card-footer-custom"><button type="button" class="btn btn-block">Donate Now</button></div>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={Cloth} alt="cap" style={{height:150}}></img>
                                <div class="card-body">
                                <h5 class="card-title">Cloths</h5>
                                <div class="card-footer card-footer-custom"><button type="button" class="btn btn-block">Donate Now</button></div>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={Device} alt="cap" style={{height:150}}></img>
                                <div class="card-body">
                                <h5 class="card-title">Electronic Devices</h5>
                                <div class="card-footer card-footer-custom"><button type="button" class="btn btn-block">Donate Now</button></div>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={Money} alt="cap" style={{height:150}}></img>
                                <div class="card-body">
                                <h5 class="card-title">Money</h5>
                                <div class="card-footer card-footer-custom"><button type="button" class="btn btn-block">Donate Now</button></div>
                                </div>
                            </div>
                    </div>
                    </div>

             
                          
                </div>
            </div>
        </div>
    );
}