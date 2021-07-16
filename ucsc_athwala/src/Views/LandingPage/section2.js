import React from 'react';
import Team from '../../image/about2.jpg';

export default function about(){
    return(
    <div class='row homeabout'>

        <div class="col-lg-8 col-md-8 col-sm-12 desc">
     
            <h3>Let's Care about Others</h3>
            <p>
            As human beings we each have a responsibility to care for humanity. Expressing concern for others brings inner strength and deep satisfaction. As social animals, human beings need friendship, but friendship doesn't come from wealth and power, but from showing compassion and concern for others..<br></br>
             
            </p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <img src={Team} class="img-fluid"></img>
        </div>
    </div>
    );
}