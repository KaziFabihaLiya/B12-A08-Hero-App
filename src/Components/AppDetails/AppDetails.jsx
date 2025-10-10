import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const formatNumber = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  return num;
};
    
const AppDetails = () => {


    const { appId } = useParams();
    const data = useLoaderData();
    const appid=parseInt(appId)
    
    const singleApp=data.find(app => app.id === appid)
    console.log(singleApp);
    const {title, image, description, companyName, downloads, ratingAvg, reviews, size} = singleApp;
    return (
        <div className='bg-base-200'>
            <div className=" m-[80px]">
                <div className="flex flex-col lg:flex-row ">
                    <img
                    src={image}
                    className="w-[350px] rounded-lg shadow-2xl mr-[40px]"
                    />
                    <div className=''>
                    <h2 className="text-3xl text-[#001931] font-bold mb-2">
                            {title}: <span>{description}</span>
                    </h2>
                    <p className='text-[#00193180] mb-[30px] font-normal text-xl'>Developed by <span className='bg-clip-text text-transparent font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>{companyName}</span></p>
                    <div className='w-6xl border-t-1 border-solid border-gray-300'>

                    </div>
                    <div className='flex flex-row gap-16 mt-[30px]'>
                        <div className='flex flex-col justify-start items-left text-left align-left'>
                            <img className='w-[40px] mb-2' src="/icon-downloads.png" alt="" />
                            <p className='text-[#00193180] text-base font-normal'>Downloads</p>
                            <h2 className='text-[40px] font-extrabold'>{formatNumber(downloads)}</h2>

                        </div>
                        <div>
                            <img className='w-[40px] mb-2' src="/icon-ratings.png" alt="" />
                            <p className='text-[#00193180] text-base font-normal'>Average Ratings</p>
                            <h2 className='font-extrabold text-[40px]'>{ratingAvg}</h2>
                        </div>
                        <div>
                            <img className='w-[40px] mb-2' src="/icon-review.png" alt="" />
                            <p className='text-[#00193180] text-base font-normal'>Total Reviews</p>
                            <h2 className='font-extrabold text-[40px]'>{formatNumber(reviews)}</h2>
                        </div>
                    </div>
                        <button className="btn bg-[#00D390] text-white align-left px-6 py-6 text-lg   mt-6 font-semibold">Install Now {size} MB</button>
                    </div>
                </div>
                
            </div>
            <div className='borderline border-t-2 border-solid border-gray-300 w-full'></div>
        </div>
    );
};

export default AppDetails;