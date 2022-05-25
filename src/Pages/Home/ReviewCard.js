import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='text-lg'>{review.review}</p>
                <div className='flex items-center'>
                    <span className='text-lg'>{review.rating}</span>
                    <FontAwesomeIcon className='text-yellow-500 pl-2' icon={faStar}></FontAwesomeIcon>
                </div>
                <p className='font-semibold'>- {review.userName}</p>
            </div>
        </div>
    );
};

export default ReviewCard;