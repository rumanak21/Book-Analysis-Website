import React from 'react';

const CustomerReviews = (props) => {
    const {name, comment, icon}=props.review
    console.log(icon)
    return (
        <div>
            <h2>{name}</h2>
            <p>{comment}</p>
            <p>{icon}</p>
        </div>
    );
};

export default CustomerReviews;