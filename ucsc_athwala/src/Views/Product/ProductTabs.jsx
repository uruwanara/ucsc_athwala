import React from 'react';
import './ProductView.css';
import {Link, useHistory } from "react-router-dom";

export default function Producttab(){
    const history = useHistory();
    return(
        <div>
           <ul class="nav nav-tabs">
           {/* <li class="nav-item dropdown nav-item-custom">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#all" role="button" aria-haspopup="true" aria-expanded="false">All Products</a>
                    <div class="dropdown-menu dropdown-menu-custom">
                    
                    <a class="dropdown-item" href="#note">Lecture note</a>
                    <a class="dropdown-item" href="electric">Electric devices</a>
                    <a class="dropdown-item" href="other">Other</a>
                    </div>
                </li> */}
                <li class="nav-item dropdown nav-item-custom">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#note" role="button" aria-haspopup="true" aria-expanded="false">Buying</a>
                    <div class="dropdown-menu dropdown-menu-custom">
                    <Link to="/ViewEleProduct" class="dropdown-item">All</Link>
                    <Link to="/ViewNoteProduct" class="dropdown-item">Lecture note</Link>
                    <Link to="/ViewEleProduct" class="dropdown-item">Electric devices</Link>
                    <Link to="/ViewNoteProduct" class="dropdown-item">Other</Link>
                    </div>
                </li>
                <li class="nav-item dropdown nav-item-custom">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#note" role="button" aria-haspopup="true" aria-expanded="false">Selling</a>
                    <div class="dropdown-menu dropdown-menu-custom">
                    <Link to="/SellNoteProduct" class="dropdown-item">Lecture note</Link>
                    <Link to="/SellEleProduct" class="dropdown-item">Electric devices</Link>
                    <Link to="/SellNoteProduct" class="dropdown-item">Other</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}