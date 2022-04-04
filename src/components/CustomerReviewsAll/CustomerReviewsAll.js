import React from 'react';

const CustomerReviewsAll = (props) => {
    const { name, comment, icon ,image} = props.review
    return (
        <div className='border-solid border-2 border-khaki-600 rounded mx-10 my-10 p-10 bg-slate-300 shadow-xl shadow-slate-500 '>
            <div className='flex justify-center content-center'><img className='rounded-lg 'src={image} alt="" /></div>
            <h2 className=' text-xl text-sky-500 p-2 '>{name}</h2>
            <p className='text-left' >{comment}</p>
            <p>Ratings: {icon}</p>

        </div>

    );
};

export default CustomerReviewsAll;