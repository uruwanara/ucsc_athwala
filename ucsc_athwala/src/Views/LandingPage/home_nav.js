import React from 'react';

export default function home(){
    return(
    <div>
         <nav class="navbar navbar-expand-lg fixed-top ">  
                        <h4 style={{color:'white'}}>UCSC athwela</h4>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul class="navbar-nav mr-4">
                                <li class="nav-item">
                                    <a class="nav-link" data-value="about" href="#">Home</a></li>  
                                <li class="nav-item">
                                    <a class="nav-link " data-value="portfolio"href="#">Login</a>    
                                </li>
                                <li class="nav-item"> 
                                    <a class="nav-link " data-value="blog" href="#">SignUp</a></li>   
                            </ul> 
</div></nav>
        

    </div>
    );
}