import React from 'react';
import useReviews from '../../hooks/useReviews';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import CustomerReviewsAll from '../CustomerReviewsAll/CustomerReviewsAll';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div>
            <h2>Total Review: {reviews.length}</h2>
            {reviews.map(review => <CustomerReviewsAll key ={review.id} review={review}></CustomerReviewsAll>)}
        </div>
    );
};

export default Reviews;