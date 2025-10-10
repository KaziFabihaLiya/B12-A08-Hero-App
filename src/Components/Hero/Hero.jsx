import React from 'react';

const Hero = () => {
    return (
        <>
        {/* Hero Section */}
            <div className='mx-auto w-6xl'>
                <h1 className='text-7xl font-bold text-center mb-4 mt-20'>We Build<br></br><span className='text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>Productive</span> Apps</h1>
                <p className='text-center text-[#627382] text-xl font-normal whitespace-nowrap'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className="flex justify-center gap-4 my-10">
                <div >
                    <button className="px-5 h-12 btn bg-transparent text-[#001931] text-lg font-semibold "><img src="/fi_16076057.png" className='w-8' alt="" />Play Store</button>
                </div>
                <div>
                    <button className="h-12 px-5 btn bg-transparent text-[#001931] text-lg font-semibold"><img src="/Group.png" className='w-8 ' alt="" /> App Store</button>
                    </div>
            </div>
            <div>
                <img className='mx-auto justify-center' src="/hero.png" alt="" srcset="" />
            </div>
        </>
    );
};

export default Hero;