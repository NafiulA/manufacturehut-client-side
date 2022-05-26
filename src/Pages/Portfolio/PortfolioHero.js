import React from 'react';
import profile from "../../assets/images/my-bg.jpg";

const PortfolioHero = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={profile} class="w-full max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Nafiul Alam</h1>
                    <p class="py-3">Hi, </p>
                    <p>I am a fullstack developer, currently working with the MERN stack technologies. I love to learn new technologies to find creative solution to various problems. Looking forward to working on something exciting with you.</p>
                    <div className='py-5 flex gap-3'>
                        <a href='https://www.linkedin.com/in/nafiul-alam-b147a51aa/' target="_blank" rel="noreferrer"><button class="btn btn-sm btn-primary ">LinkedIn</button></a>
                        <a href='https://twitter.com/NafiulAlam16' target="_blank" rel="noreferrer"><button class="btn btn-sm btn-primary ">Twitter</button></a>
                        <a href='https://github.com/NafiulA' target="_blank" rel="noreferrer"><button class="btn btn-sm btn-primary ">GitHub</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioHero;