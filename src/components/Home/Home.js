import React from 'react';

const Home = () => {
    return (
        <div className='m-20 flex leading-normal'>
            <div className='w-full '> <img src="https://images.unsplash.com/photo-1625850810879-63fa66c9d0b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" srcset="" /> </div>
            <div className='m-10'>
                <h1 className=' leading-loose text-3xl font-extrabold'>Most Popular and Best Selling Book. <br /> <span className='text-sky-800 text-4xl' >That can make your life meaningful.</span></h1>
                <p className=' p-5 '>Ikigai gently unlocks simple secrets we can all use to live long, meaningful, happy lives. Science-based studies weave beautifully into honest, straight-talking conversation you won't be able to put down. Warm, patient, and kind, this book pulls you gently along your own journey rather than pushing you from behind.</p>
                <button className='py-2 px-8 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>SEE MORE</button>
            </div>
        </div>
    );
};

export default Home;