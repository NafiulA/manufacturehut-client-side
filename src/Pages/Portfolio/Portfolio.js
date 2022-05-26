import React from 'react';
import Education from './Education';
import PortfolioHero from './PortfolioHero';
import Skills from './Skills';

const Portfolio = () => {
    return (
        <div>
            <PortfolioHero></PortfolioHero>
            <Education></Education>
            <Skills></Skills>
        </div>
    );
};

export default Portfolio;