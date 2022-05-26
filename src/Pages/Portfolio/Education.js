import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Education = () => {
    return (
        <div className='my-5'>
            <h3 className='text-center text-3xl my-5'>My Education</h3>

            <div className='w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">
                            <FontAwesomeIcon className='text-gray-500' icon={faUserGraduate}></FontAwesomeIcon>
                            <p className='pl-2'> B.Sc in Electrical and Electronics Engineering</p></h2>
                        <div className='py-3'>
                            <p className='uppercase'>Independent University, Bangladesh</p>
                            <p className='text-gray-400'>Jan-2018 to Jan-2022</p>
                        </div>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">
                            <FontAwesomeIcon className='text-gray-500' icon={faUserGraduate}></FontAwesomeIcon>
                            <p className='pl-2'> Higher Secondary Certificate</p></h2>
                        <div className='py-3'>
                            <p className='uppercase'>BAF Shaheen College, Kurmitola</p>
                            <p className='text-gray-400'>2017</p>
                        </div>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">
                            <FontAwesomeIcon className='text-gray-500' icon={faUserGraduate}></FontAwesomeIcon>
                            <p className='pl-2'> Secondary School Certificate</p></h2>
                        <div className='py-3'>
                            <p className='uppercase'>Monipur High School and College</p>
                            <p className='text-gray-400'>2015</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Education;