import React from 'react';
import BusinessSummary from './BusinessSummary';
import HeroSec from './HeroSec';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <HeroSec></HeroSec>
            <BusinessSummary></BusinessSummary>
            <Products></Products>
        </div>
    );
};

export default Home;