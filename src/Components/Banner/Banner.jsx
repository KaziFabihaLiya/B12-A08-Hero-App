import React from 'react';

const Banner = () => {
    return (
        <div className='w-full  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] justify-center text-center text-white'>
            <h2 className='pt-20 pb-10 text-5xl font-bold'>Trusted by Millions, Built for You</h2>
            <div className='flex flex-row justify-around pb-20 px-46'>
                <div>
                    <h4 className='font-normal text-xl text-[#FFFFFF80]'>Total Downloads</h4>
                    <h1 className='text-[64px] font-extrabold'>29.6M</h1>
                    <h4 className='font-normal text-xl text-[#FFFFFF80]'>21% more than last month</h4>
                </div>
                <div>
                    <h4 className='font-normal text-xl text-[#FFFFFF80]'>Total Reviews</h4>
                    <h1 className='text-[64px] font-extrabold'>906K</h1>
                    <h4 className='font-normal text-xl text-[#FFFFFF80]'>46% more than last month</h4>
                </div>
                <div>
                    <h4 className='font-normal text-xl text-[#FFFFFF80]'>Active Apps</h4>
                    <h1 className='text-[64px] font-extrabold'>132+</h1>
                    <h4 className='font-normal text-xl text-[#FFFFFF80]'>31 more will Launch</h4>
                </div>
            </div>
        </div>
    );
};

export default Banner;