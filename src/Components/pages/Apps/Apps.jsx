
import { Suspense } from 'react';
import App from '../App/App';

const Apps = ({data}) => {

    
    console.log(data.companyName)

    return (
        <div>
            <div className='mx-20 mt-20 mb-10 text-center justify-center'>
                <h2 className='text-5xl font-bold'>Trending Apps</h2>
                <p className='text-xl text-[#627382] font-normal mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-4 mx-20'>
            <Suspense fallback={'Loading....'}>
                {
                    data.map((app)=> <App key={app.id} app={app}></App>)
                }
            </Suspense>
            </div>
            <div className='mt-10 mb-20 justify-center flex'>
                <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white "><img src="/github-mark-white.png" className='w-[30px] ' alt="" /> Show All</button>
            </div>
        </div>
    );
};

export default Apps;