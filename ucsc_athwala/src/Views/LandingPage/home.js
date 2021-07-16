import React from 'react';
import Homenav from './home_nav';
import HomeHeader from './homeheader';
import AboutSection from './aboutsection';
import FooterSection from './footer';
import './main.css';

export default function home(){
    return(
    <div>
        <Homenav />
        <HomeHeader />
        <AboutSection />
        <FooterSection />

    </div>
    );
}
