import React from 'react';

const CustomerReviewsAll = (props) => {
    const { name, comment, icon } = props.review
    return (
        <div className='border-solid border-2 border-khaki-600 rounded m-2 p-5'>
            <h2 className=' text-xl text-sky-500 p-2 '>{name}</h2>
            <p className='text-left' >{comment}</p>
            <p>Ratings: {icon}</p>

        </div>

    );
};

export default CustomerReviewsAll;