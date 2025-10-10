import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';
import App from '../App/App';

const AllApp = () => {
    
    //All app page, can be accessed through navbar Apps
    const data = useLoaderData();
    return (
        <div>
            <div className='mx-20 mt-20 mb-8 text-center justify-center'>
                <h2 className='text-5xl font-bold'>Our All Applications</h2>
                <p className='text-xl text-[#627382] font-normal mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between m-20'>
                <h2 className='font-semibold text-2xl'>({data.length}) Apps Found</h2>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                    </label>
            </div>
            <div className='grid grid-cols-4 gap-4 mx-20 mb-20'>
            <Suspense fallback={'Loading....'}>
                {
                    data.map((app)=> <App key={app.id} app={app}></App>)
                }
            </Suspense>
            </div>
        </div>
    );
};

export default AllApp;