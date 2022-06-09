import React from 'react';
import { Link } from 'react-router-dom';
import aboutCompany from '../../assets/images/aboutCompany.jpg';

const Features = () => {
    return (
        <div id='about' className="bg-fixed" style={{ "backgroundImage": `url(${aboutCompany})` }} >
            <div className='bg-gradient-to-r from-white/90 to-white/50 min-h-screen flex justify-center justify-items-center items-center'>
                <div className="hero-content flex-col lg:flex-row-reverse gap-5 group">
                    <img src={aboutCompany} className="w-full max-w-sm lg:max-w-lg rounded-lg group-hover:scale-105 transition-all duration-500 ease-linear" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">About Our Company</h1>
                        <p className="py-6 font-semibold">We are always aiming to exceed customer expectations and provide creative solutions to meet any kind of demand. Keeping up with the emerging trends, market needs and combining them with our technical and creative expertise…</p>
                        <Link to="/login"><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;