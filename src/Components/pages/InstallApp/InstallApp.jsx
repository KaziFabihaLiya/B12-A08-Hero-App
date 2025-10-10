import React from 'react';
import formatNumber from '../../../utilities/formatNumber';


const InstallApp = ({app}) => {

    //Installed Each App card

    const {image, title, slogan, downloads, ratingAvg, size} = app;
    return (
        <div>
            <div className="bg-white shadow-sm flex items-center justify-between p-3 border-gray-200">
                <div className='flex flex-row items-center'>
                    <div>
                        <figure>
                            <img className='w-20 rounded-lg'
                            src={image}
                            alt="Shoes" />
                        </figure>
                    </div>
                    <div className="p-0 flex flex-col">
                        <div className="flex flex-row items-center justify-center text-left px-[12px] ml-3 mt-1">
                            <h2 className="text-xl font-medium">
                                {title}: <span className="font-normal">{slogan}</span>
                            </h2>
                        </div>
                        <div className="rounded-sm flex flex-row items-center px-[12px] gap-3 ml-3">
                            <div className="flex flex-row items-center gap-2 text-[#00D390] text-base">
                                <img className='w-4 h-4  mt-2' src="/icon-downloads.png" alt="" /><span className='mt-2'>{formatNumber(downloads)}M</span>
                            </div>
                            <div className="flex flex-row items-center gap-2 text-[#FF8811] text-base">
                                <img className='w-4 h-4 mt-2' src="/icon-ratings.png" alt="" /><span className='mt-2'>{ratingAvg}</span>
                            </div>
                            <div className='items-center mt-2 text-[#627382] text-base '>
                                {size}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center mr-2'><button className="btn bg-[#00D390] text-white  px-4 py-6 text-lg font-semibold">Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstallApp;