import React from 'react';
import useReviews from '../../hooks/useReviews';
import CustomerReviews from '../CustomerReviews/CustomerReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div>
            <h2>review {reviews.length}</h2>
            {
                reviews.map(review => <CustomerReviews key ={review.id} review={review} ></CustomerReviews> )
            }
        </div>
    );
};

export default Reviews;