import React from 'react';
import aboutCompany from '../../assets/images/aboutCompany.jpg';

const Features = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                <img src={aboutCompany} className="w-full max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">About Our Company</h1>
                    <p className="py-6">We are always aiming to exceed customer expectations and provide creative solutions to meet any kind of demand. Keeping up with the emerging trends, market needs and combining them with our technical and creative expertise…</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Features;