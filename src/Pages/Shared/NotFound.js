import React from 'react';
import Notfound from '../../assets/images/NotFound.jpg';

const NotFound = () => {
    return (
        <div className='min-h-full'>
            <img className='w-1/3 mx-auto' src={Notfound} alt="notfound" />
        </div>
    );
};

export default NotFound;