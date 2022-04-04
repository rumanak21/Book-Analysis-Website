import React from 'react';

const CustomerReviews = (props) => {

    const { name, comment, icon, image } = props.review

    return (
        <div>
            <div className='border-solid border-2 border-khaki-600 rounded m-10 p-10 bg-slate-300 shadow-xl shadow-slate-500 '>
                <div className='flex justify-center content-center'><img className='rounded-lg 'src={image} alt="" /></div>
                <h2 className=' text-xl text-orange-500 font-semibold p-2 ' >{name}</h2>
                <p className='text-left' >{comment}</p>
                <p> Ratings: {icon} </p>

            </div>
            
        </div>

    );
};

export default CustomerReviews;