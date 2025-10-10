import React from 'react';
import { Link } from 'react-router';
import formatNumber from '../../../utilities/formatNumber';

const App = ({app}) => {
    //Single App Card
    console.log('testing', app)
    const {image, title, slogan, downloads, ratingAvg, id} = app;
    return (
        <Link to={`/appDetails/${id}`}>
            <div className="card bg-base-100 shadow-sm pt-3 px-3">
                <figure>
                    <img className='w-full rounded-sm px-3'
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body p-0">
                    <div className="flex items-center justify-left text-left px-[12px] pt-[16px]">
                        <h2 className="text-sm font-semibold">
                            {title}: <span className="font-normal">{slogan}</span>
                        </h2>
                    </div>
            
                    <div className="card-actions rounded-sm justify-between px-[12px] pb-[16px]">
                        <div className="btn text-[#00D390] bg-[#F1F5E8]"><img className='w-4' src="/icon-downloads.png" alt="" />{formatNumber(downloads)}</div>
                        <div className="btn text-[#FF8811] bg-[#FFF0E1]"><img className='w-4' src="/public/icon-ratings.png" alt="" />{ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default App;