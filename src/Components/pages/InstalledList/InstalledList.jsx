import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApp } from '../../../utilities/addToDB';
import InstallApp from '../InstallApp/InstallApp';

const InstalledList = () => {

    //Installed All App List
    //State Declare
    const [installApp, setinstallApp] = useState([]);
    const [sort, setSort] = useState([])

    const installData = useLoaderData();
    
    console.log('Testing kortesi', installData);

    useEffect(()=> {
        const getAllInstalledData = getInstalledApp();

        const ConvertedApp = getAllInstalledData.map(id=> parseInt(id))
        const myInstalledAppList = installData.filter(app=> ConvertedApp.includes(app.id))
        setinstallApp(myInstalledAppList)
    }, [installData])

    const handleSort = (type) => {
        if (type === "ascending"){
            const sortApps = [...installApp].sort((a,b)=> a.downloads - b.downloads)
            setinstallApp(sortApps);
            console.log(sortApps)
        }
        else if ( type === "descending"){
            const sortApps = [...installApp].sort((a,b)=> b.downloads - a.downloads)
            setinstallApp(sortApps);
        }
    }
    return (
        <div className='bg-[#D2D2D210] py-5'>
            <div className='mx-20 mt-20 mb-10 text-center justify-center'>
                <h2 className='text-5xl font-bold'>Your Installed Apps</h2>
                <p className='text-xl text-[#627382] font-normal mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='mx-20 flex justify-between'>
                <h2 className='font-semibold text-2xl'>{installApp.length} Apps Found</h2>
                <button className='dropdown flex flex-row items-center text-base font-normal text-[#627382]'>
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button" className="btn m-1 text-center">
                            <span>Sort By Downloads </span>
                            <img className='w-[15px] h-[8px] ml-1' src="/Vector.png" alt="" /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-centerrounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={()=> handleSort("ascending")}>Sort by Ascending</a></li>
                            <li><a onClick={()=> handleSort("descending")}>Sort by Descending</a></li>
                        </ul>
                    </div>
                </button>
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