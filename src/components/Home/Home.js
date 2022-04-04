import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import CustomerReviews from '../CustomerReviews/CustomerReviews';


const Home = () => {
    const [reviews, setReviews] = useReviews();

    const threeReview = reviews.slice(0, 3);
    let navigate = useNavigate();
    const seeAllReviews = () => {
        navigate(`/reviews`)
    }

    return (
        <div>
            <div className=' my-10 mx-20 flex leading-normal text-slate-500'>
                <div className='w-full'> <img src="https://images.unsplash.com/photo-1625850810879-63fa66c9d0b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" srcset="" /> </div>
                <div className='m-10'>
                    <h1 className=' leading-loose text-3xl font-extrabold'>Book Analysis Website. <br /> <span className='text-sky-800 text-4xl' >Ikigai can make your life meaningful.</span></h1>
                    <p className=' p-5 '>Ikigai gently unlocks simple secrets we can all use to live long, meaningful, happy lives. Science-based studies weave beautifully into honest, straight-talking conversation you won't be able to put down. Warm, patient, and kind, this book pulls you gently along your own journey rather than pushing you from behind.</p>
                    <button className='py-2 px-8 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>SEE MORE</button>
                </div>
            </div>

            <div className='grid grid-cols-3 mx-20'>
                {threeReview.map(review => < CustomerReviews key={review.id} review={review} ></CustomerReviews>)}
            </div>

            <button onClick={seeAllReviews} className='m-2 py-1 px-20 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>See All Reviews</button>
        </div >
    );
};

export default Home;