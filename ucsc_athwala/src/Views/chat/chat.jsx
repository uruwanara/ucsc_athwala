import './chat.css';
import Event from '../../image/h1.jpg';

import React from 'react';
import { ChatEngine } from 'react-chat-engine';
//Importing bootstrap and other modules
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

export function home(){



    return (
        <div class="row rounded-lg overflow-hidden shadow">

            <div class="col-5 px-0">
                <div class="bg-white">

                    <div class="bg-gray px-4 py-2 bg-light">
                        <p class="h5 mb-0 py-1">Recent</p>
                    </div>

                    <div class="messages-box">
                        <div class="list-group rounded-0">
                            <a class="list-group-item bg-secondary list-group-item-action active text-white rounded-0 customer-1">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">25 Dec</small>
                                        </div>
                                        <p class="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">14 Dec</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">9 Nov</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">18 Oct</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">17 Oct</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">2 Sep</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">30 Aug</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">21 Aug</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">21 Aug</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-7 px-0">
                <div class="px-4 py-5 chat-box bg-white">

                    <div class="media w-50 mb-3"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                        <div class="media-body ml-3">
                            <div class="bg-light rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>


                    <div class="media w-50 ml-auto mb-3">
                        <div class="media-body">
                            <div class="bg-secondary rounded py-2 px-3 mb-2 custome-1">
                                <p class="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>


                    <div class="media w-50 mb-3"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                        <div class="media-body ml-3">
                            <div class="bg-light rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-muted">Test, which is a new approach to have</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>


                    <div class="media w-50 ml-auto mb-3">
                        <div class="media-body">
                            <div class="bg-secondary rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>


                    <div class="media w-50 mb-3"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                        <div class="media-body ml-3">
                            <div class="bg-light rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-muted">Test, which is a new approach</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>


                    <div class="media w-50 ml-auto mb-3">
                        <div class="media-body">
                            <div class="bg-secondary rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>

                </div>
                <form action="#" class="bg-light">
                    <div class="input-group">
                        <input type="text" placeholder="Type a message" aria-describedby="button-addon2" class="form-control rounded-0 border-0 py-4 bg-light" />
                        <div class="input-group-append">
                            <button id="button-addon2" type="button" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
                        </div>
                    </div>
                </form>

            </div>
        </div>





    );

}

export default function Chat() {

    const userData = JSON.parse(localStorage.getItem("userData"))
    console.log(userData.username);
    let cap = "";
    let em = "";
    let un = "";

    if (userData.userType == "STUDENT" || userData.userType == "UNIONST") {
        cap = userData.email.toUpperCase();
        em = cap.substr(0, cap.indexOf('@'));
        un = userData.username.concat("(", em, ")");
    } else if (userData.userType == "ALUMNI") {
        un = userData.username.concat("- Alumni");
    } else if (userData.userType == "COUNSELLOR") {
        un = userData.username.concat("- Counsellor");
    } else if (userData.userType == "ADMIN") {
        un = "ADMIN";
    }
    console.log(un)
    return (

        <ChatEngine
            height='100vh'
            userName={un}
            userSecret='Ur0771110052'
            projectID='5cbe2a37-ef49-4870-8d80-f469982d0d3a'
        />
    );
}

export function home1(){



    return (
        <div class="row rounded-lg overflow-hidden shadow">

            <div class="col-5 px-0">
                <div class="bg-white">

                    <div class="bg-gray px-4 py-2 bg-light">
                        <p class="h5 mb-0 py-1">Recent</p>
                    </div>

                    <div class="messages-box">
                        <div class="list-group rounded-0">
                            <a class="list-group-item bg-secondary list-group-item-action active text-white rounded-0 customer-1">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">25 Dec</small>
                                        </div>
                                        <p class="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">14 Dec</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">9 Nov</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">18 Oct</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">17 Oct</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">2 Sep</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">30 Aug</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">21 Aug</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">21 Aug</small>
                                        </div>
                                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-7 px-0">
                <div class="px-4 py-5 chat-box bg-white">

                    <div class="media w-50 mb-3"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                        <div class="media-body ml-3">
                            <div class="bg-light rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>


                    <div class="media w-50 ml-auto mb-3">
                        <div class="media-body">
                            <div class="bg-secondary rounded py-2 px-3 mb-2 custome-1">
                                <p class="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>


                    <div class="media w-50 mb-3"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                        <div class="media-body ml-3">
                            <div class="bg-light rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-muted">Test, which is a new approach to have</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>


                    <div class="media w-50 ml-auto mb-3">
                        <div class="media-body">
                            <div class="bg-secondary rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>


                    <div class="media w-50 mb-3"><img src={Event} alt="user"  style={{height:70,width:70}}class="rounded-circle" />
                        <div class="media-body ml-3">
                            <div class="bg-light rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-muted">Test, which is a new approach</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>


                    <div class="media w-50 ml-auto mb-3">
                        <div class="media-body">
                            <div class="bg-secondary rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                    </div>

                </div>
                <form action="#" class="bg-light">
                    <div class="input-group">
                        <input type="text" placeholder="Type a message" aria-describedby="button-addon2" class="form-control rounded-0 border-0 py-4 bg-light" />
                        <div class="input-group-append">
                            <button id="button-addon2" type="button" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
                        </div>
                    </div>
                </form>

            </div>
        </div>





    );

}