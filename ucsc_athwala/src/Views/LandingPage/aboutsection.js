import React from 'react';
import Team from '../../image/about.jpg';
import logo from "../Signin/Img/ico.png";
export default function about(){
    return(
    <div class='row homeabout'>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <img src={Team} class="img-fluid"></img>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 desc">
            
            <h3>About Us</h3>
            <p>
            we are third year undergraduate of university Of Colombo 
            School of Computing.our team members are Uthpala,Anuradha,Abises,Nimasha and Dhanu. 
            'UCSC Athwala' is our third year group project.
            The major goal of this project is to help the newcomers of UCSC to resonate with the  
            environment, culture of the university and the administration. Also to help the student 
             community to manage their essentials throughout the university period and give  opportunities to 
             help others in the student community.<br></br>
             
            </p>
        </div>

    </div>
    );
}