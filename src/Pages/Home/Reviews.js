import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviewLoading, setReviewLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://radiant-journey-27720.herokuapp.com/review")
            .then(res => res.json())
            .then(data => {
                setReviews(data.reverse());
                setReviewLoading(false);
            })
    }, []);

    return (
        <div className='my-6 py-5'>
            <p className='text-center text-3xl my-5'>Reviews</p>
            {reviewLoading && <Loading></Loading>}
            <div className='w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {reviews.slice(0, 6).map(review => <ReviewCard
                    key={review._id}
                    review={review}></ReviewCard>)}
            </div>
        </div>
    );
};

export default Reviews;