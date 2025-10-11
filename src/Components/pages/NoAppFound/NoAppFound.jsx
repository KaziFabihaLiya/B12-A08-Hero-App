import React from 'react';
import { useNavigate } from 'react-router';
const NoAppFound = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    
    return (
        <div>
            <div>
                <img className='mx-auto w-2xl m-10' src="/App-Error.png" alt="" />
                <div className='mx-20 mt-10 mb-10 text-center justify-center'>
                    <h2 className='text-5xl font-bold'>Oops, page not found!</h2>
                    <p className='text-xl text-[#627382] font-normal mt-4'>The page you are looking for is not available.</p>
                <div className='mt-10 mb-20 justify-center flex'>
                    <button onClick={()=> handleGoBack()} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ">Go Back!</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NoAppFound;