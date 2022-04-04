import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-20'>
            <div className='my-10 border border-slate-300 bg-slate-200'>
                <h2 className='text-xl px-5 text-orange-500 font-semibold' >What is Context API?</h2>
                <p className='p-5 text-slate-500'>The React Context API is a way for a React app to effectively produce global variables which will be passed around. This is often the choice to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is additionally touted as a neater, lighter approach to state management using Redux.

                    Context API is a (kind of) new feature added in version 16.3 of React that permits one to share state across the whole app (or a part of it) lightly and with ease.</p>
            </div>

            <div className='border border-slate-300 bg-slate-200'>
                <h2 className='text-xl p-5 text-orange-500 font-semibold' >What is Semantic Tag?</h2>

                <p className='px-5 pb-5 text-slate-500 '>A semantic tag clearly describes its meaning to both the browser and the developer.
                    And also, Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on.
                </p>
            </div>
        </div>
    );
};

export default Blogs;