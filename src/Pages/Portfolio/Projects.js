import React from 'react';
import gymwhale from '../../assets/images/gymwhale.png';
import stockpile from "../../assets/images/stockpile.png";
import typemonkey from '../../assets/images/typemonkey.png';

const Projects = () => {
    return (
        <div className='my-5'>
            <h3 className='text-center text-3xl my-5'>My Projects</h3>
            <div className='w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                <div class="card w-full bg-base-100 shadow-xl">
                    <figure><img src={stockpile} alt="stockpile" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            <a href='https://stockpile-2e1cb.web.app/' target="_blank" rel="noreferrer"> Stockpile</a>
                        </h2>
                        <p>It's an inventory management website where users can signin and manage their inventories.</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">ReactJS</div>
                            <div class="badge badge-outline">ExpressJS</div>
                            <div class="badge badge-outline">NodeJS</div>
                            <div class="badge badge-outline">MongoDB</div>
                            <div class="badge badge-outline">Firebase</div>
                        </div>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <figure><img src={gymwhale} alt="stockpile" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            <a href='https://gym-trainer-634e1.web.app/' target="_blank" rel="noreferrer"> Type-monkey</a>
                        </h2>
                        <p>It's a website for a gym professional to provide his services. Users can book for sessions with him.</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">ReactJS</div>
                            <div class="badge badge-outline">Tailwind CSS</div>
                            <div class="badge badge-outline">Firebase</div>
                        </div>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <figure><img src={typemonkey} alt="stockpile" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            <a href='https://type-monkey.netlify.app/' target="_blank" rel="noreferrer"> Type-monkey</a>
                        </h2>
                        <p>It's a website where user can test their typing speed.</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">HTML5</div>
                            <div class="badge badge-outline">Tailwind CSS</div>
                            <div class="badge badge-outline">JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;