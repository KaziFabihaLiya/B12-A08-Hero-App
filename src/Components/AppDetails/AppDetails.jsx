import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utilities/addToDB';
import formatNumber from '../../utilities/formatNumber';
import Description from '../pages/Description/Description';
import Barcharttt from '../Barchart/Barcharttt';

    
const AppDetails = () => {

    // each app details on this page
    const { appId } = useParams();
    const data = useLoaderData();
    const appid=parseInt(appId)
    
    const singleApp = data?.find(app => app.id === appid)
    if(!singleApp){
        return <errorPage></errorPage>
    }
    //destructing
    const {id, title, image, slogan, description, ratings, companyName, downloads, ratingAvg, reviews, size} = singleApp || {};
    console.log("singleApp",singleApp)

    const handleInstallApp = id => {
        addToStoreDB(id);
    }
    return (
        <div className='pt-[80px] bg-base-200'>
            <div className=" max-sm:mx-[40px] max-sm:mb-[40px] mx-[80px] mb-[80px] ">
                <div className="flex flex-col lg:flex-row ">
                    <img
                    src={image}
                    className="max-sm:mb-10 max-sm:w-[200px] max-sm:mr-[20px] w-[350px] rounded-lg shadow-2xl mr-[40px] "
                    />
                    <div className=''>
                    <h2 className="text-3xl text-[#001931] font-bold mb-2">
                            {title}: <span>{slogan}</span>
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
                        <Link to={'/installedList'}><button onClick={()=> handleInstallApp(id)} className="btn bg-[#00D390] text-white align-left px-6 py-6 text-lg   mt-6 font-semibold">Install Now {size} MB</button></Link>
                    </div>
                </div>
                
            </div>
            <div className='flex items-center border-t-2 mx-[80px] border-solid border-gray-300 w-[1528px] h-1 mb-3 '>

            </div>
            {/* <div className="charts">
                <h2>Ratings</h2> */}
            <div className="p-4 pt-10 charts mx-20 flex flex-col justify-start text-left align-left rounded-lg w-auto">
                <h2 className="text-2xl pl-20 font-semibold text-gray-800 text-left align-left">Ratings</h2>
                    <Barcharttt ratings={ratings}></Barcharttt>

            </div>

            {/* </div> */}
            <div className='flex items-center border-t-2 mx-[80px] border-solid border-gray-300 w-[1528px] h-1 mb-3 '>
                
            </div>
            <div className='mx-20 pb-10 mt-10'>
                <h2 className='font-semibold text-2xl mb-6'>Description</h2>
                <div>
                {
                    description.map(des => <Description des={des}></Description>)//para1,para2,para3 ke access korlam
                }
                </div>
            </div>

        </div>
    );
};

export default AppDetails;