import React from 'react';

const Hero = () => {
    return (
        <>
        {/* Hero Section */}
            <div className='mx-auto w-6xl max-sm:mx-auto max-sm:w-auto'>
                <h1 className=' text-7xl font-bold text-center mb-4 mt-20 max-sm:text-2xl max-sm:px-10 '>We Build<br className='max-sm:hidden'></br><span className='max-sm:pl-1 max-sm:text-2xl max-sm:text-center  text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>Productive</span> Apps</h1>
                <p className='text-center text-[#627382] text-xl font-normal whitespace-nowrap max-sm:text-wrap max-sm:text-sm mx-10'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='max-sm:hidden'></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className="flex justify-center gap-4 my-10">
                <div >
                    <a href="https://play.google.com/store/"><button className="px-5 h-12 btn bg-transparent text-[#001931] text-lg font-semibold "><img src="/fi_16076057.png" className='w-8' alt="" />Play Store</button></a>
                </div>
                <div>
                    <a href="https://www.apple.com/app-store/"><button className="h-12 px-5 btn bg-transparent text-[#001931] text-lg font-semibold"><img src="/Group.png" className='w-8 ' alt="" />App Store</button></a>
                </div>
            </div>
            <div>
                <img className='mx-auto justify-center' src="/hero.png" alt="" srcset="" />
            </div>
        </>
    );
};

export default Hero;