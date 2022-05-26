import React from 'react';
import Footer from '../Shared/Footer';
import Education from './Education';
import PortfolioHero from './PortfolioHero';
import Projects from './Projects';
import Skills from './Skills';

const Portfolio = () => {
    return (
        <div>
            <PortfolioHero></PortfolioHero>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;