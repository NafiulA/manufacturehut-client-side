import React from 'react';
import BusinessSummary from './BusinessSummary';
import Contacts from './Contacts';
import Features from './Features';
import HeroSec from './HeroSec';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <HeroSec></HeroSec>
            <BusinessSummary></BusinessSummary>
            <Products></Products>
            <Reviews></Reviews>
            <Features></Features>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;