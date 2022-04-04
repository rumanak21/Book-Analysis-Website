import React from 'react';

const CustomerReviewsAll = (props) => {
    const { name, comment, icon } = props.review
    return (
        <div>
            <h2>{name}</h2>
            <p>{comment}</p>
            <p>{icon}</p>

        </div>

    );
};

export default CustomerReviewsAll;