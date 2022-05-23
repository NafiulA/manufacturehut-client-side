import React from 'react';
import calender from '../../assets/icons/calendar.png';
import parts from '../../assets/icons/parts.png';
import employees from '../../assets/icons/employees.png';
import partners from '../../assets/icons/partners.png';

const BusinessSummary = () => {
    return (
        <div className='my-8'>
            <h3 className='p-2 text-2xl text-center'>Our Professional team works to increase productivity and cost effectiveness on the market</h3>
            <div className='w-3/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-content-center items-center my-5 shadow-xl rounded-lg'>
                <div className='flex flex-col justify-center items-center p-5'>
                    <img src={calender} alt="" />
                    <div className='text-center pt-2'>
                        <p className='text-accent text-3xl'>20</p>
                        <p className='text-lg'>years of Experience</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center p-5'>
                    <img src={parts} alt="" />
                    <div className='text-center pt-2'>
                        <p className='text-accent text-3xl'>1 million+</p>
                        <p className='text-lg'>parts exported</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center p-5'>
                    <img src={employees} alt="" />
                    <div className='text-center pt-2'>
                        <p className='text-accent text-3xl'>1000+</p>
                        <p className='text-lg'>expert employees</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center p-5'>
                    <img src={partners} alt="" />
                    <div className='text-center pt-2'>
                        <p className='text-accent text-3xl'>80+ partners</p>
                        <p className='text-lg'>around the world</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;