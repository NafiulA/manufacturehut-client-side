import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => {
                setReviews(data.reverse());
            })
    }, []);

    return (
        <div className='my-6'>
            <p className='text-center text-3xl my-5'>Reviews</p>
            <div className='w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {reviews.slice(0, 6).map(review => <ReviewCard
                    key={review._id}
                    review={review}></ReviewCard>)}
            </div>
        </div>
    );
};

export default Reviews;