import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApp } from '../../../utilities/addToDB';
import InstallApp from '../InstallApp/InstallApp';

const InstalledList = () => {

    //Installed All App List

    const [installApp, setinstallApp] = useState([]);
    const installData = useLoaderData();
    
    console.log('Testing kortesi', installData);

    useEffect(()=> {
        const getAllInstalledData = getInstalledApp();

        const ConvertedApp = getAllInstalledData.map(id=> parseInt(id))
        const myInstalledAppList = installData.filter(app=> ConvertedApp.includes(app.id))
        setinstallApp(myInstalledAppList)
    }, [installData])
    return (
        <div className='bg-[#D2D2D210] py-5'>
            <div className='mx-20 mt-20 mb-10 text-center justify-center'>
                <h2 className='text-5xl font-bold'>Your Installed Apps</h2>
                <p className='text-xl text-[#627382] font-normal mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='mx-20 flex justify-between'>
                <h2 className='font-semibold text-2xl'>{installApp.length} Apps Found</h2>
                <button className='btn flex flex-row items-center text-base font-normal text-[#627382]'>Sort By Size <img className='w-[15px] h-[8px] ml-1' src="/Vector.png" alt="" /></button>
            </div>
            <div className='grid grid-cols-1 gap-4 mx-20 mt-4 mb-20 rounded-sm'>
                <Suspense fallback="Loading....">
                    {
                        installApp.map(app=> <InstallApp key={app.id} app={app}></InstallApp>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default InstalledList;