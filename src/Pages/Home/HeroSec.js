import React from 'react';
import { Link } from 'react-router-dom';
import background from "../../assets/images/background.jpg";

const HeroSec = () => {
    return (
        <div className="hero min-h-screen" style={{ "backgroundImage": `url(${background})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="lg:w-full w-md">
                    <h1 className="mb-5 text-4xl md:text-6xl font-bold">Leader in Car Parts Manufacturing Technologies</h1>
                    <p className="mb-5 text-xl max-w-xl mx-auto">Manufacturer and exporter of excellent quality car part. Whether you're looking for a suspension or a whole engine we got your back.  </p>
                    <Link to="/login"><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSec;