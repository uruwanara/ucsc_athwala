import React from 'react';
import './ProductView.css';

export default function Producttab(){
    return(
        <div>
           <ul class="nav nav-tabs">
           <li class="nav-item dropdown nav-item-custom">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#all" role="button" aria-haspopup="true" aria-expanded="false">All Products</a>
                    <div class="dropdown-menu dropdown-menu-custom">
                    <a class="dropdown-item" href="#all">All</a>
                    <a class="dropdown-item" href="#note">Lecture note</a>
                    <a class="dropdown-item" href="electric">Electric devices</a>
                    <a class="dropdown-item" href="other">Other</a>
                    </div>
                </li>
                <li class="nav-item dropdown nav-item-custom">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#note" role="button" aria-haspopup="true" aria-expanded="false">Selling</a>
                    <div class="dropdown-menu dropdown-menu-custom">
                    <a class="dropdown-item" href="#note">Lecture note</a>
                    <a class="dropdown-item" href="electric">Electric devices</a>
                    <a class="dropdown-item" href="other">Other</a>
                    </div>
                </li>
                <li class="nav-item dropdown nav-item-custom">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#note" role="button" aria-haspopup="true" aria-expanded="false">Buying</a>
                    <div class="dropdown-menu dropdown-menu-custom">
                    <a class="dropdown-item" href="#note">Lecture note</a>
                    <a class="dropdown-item" href="electric">Electric devices</a>
                    <a class="dropdown-item" href="other">Other</a>
                    </div>
                </li>
            </ul>
        </div>
    );
}