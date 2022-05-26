import React from 'react';

const Skills = () => {
    return (
        <div className='my-10'>
            <h3 className='text-center text-3xl my-10'>My Skills</h3>

            <div className='w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center'>
                <div className='w-3/4'>
                    <div className='w-full rounded-lg shadow-md flex items-center justify-between p-2'>
                        <p className='text-lg'>HTML5</p>
                        <div class="radial-progress" style={{ "--value": "90", "--size": "4rem" }}>90%</div>
                    </div>
                    <div className='w-full rounded-lg shadow-md flex items-center justify-between p-2 gap-3'>
                        <p className='text-lg'>CSS3</p>
                        <div class="radial-progress" style={{ "--value": "80", "--size": "4rem" }}>80%</div>
                    </div>
                    <div className='w-full rounded-lg shadow-md flex items-center justify-between p-2 gap-3'>
                        <p className='text-lg'>Tailwind CSS</p>
                        <div class="radial-progress" style={{ "--value": "90", "--size": "4rem" }}>90%</div>
                    </div>
                    <div className='w-full rounded-lg shadow-md flex items-center justify-between p-2 gap-3'>
                        <p className='text-lg'>JavaScript</p>
                        <div class="radial-progress" style={{ "--value": "80", "--size": "4rem" }}>80%</div>
                    </div>
                </div>
                <div className='w-3/4'>
                    <div className='w-full rounded-lg shadow-md flex items-center justify-between p-2 gap-3'>
                        <p className='text-lg'>ReactJS</p>
                        <div class="radial-progress" style={{ "--value": "80", "--size": "4rem" }}>80%</div>
                    </div>
                    <div className='w-full rounded-lg shadow-md flex items-center justify-between p-2 gap-3'>
                        <p className='text-lg'>NodeJS</p>
                        <div class="radial-progress" style={{ "--value": "40", "--size": "4rem" }}>40%</div>
                    </div>
                    <div className='w-full rounded-lg shadow-md flex items-center justify-between p-2 gap-3'>
                        <p className='text-lg'>ExpressJS</p>
                        <div class="radial-progress" style={{ "--value": "50", "--size": "4rem" }}>50%</div>
                    </div>
                    <div className='w-full rounded-lg shadow-md flex items-center justify-between p-2 gap-3'>
                        <p className='text-lg'>MongoDB</p>
                        <div class="radial-progress" style={{ "--value": "50", "--size": "4rem" }}>50%</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;