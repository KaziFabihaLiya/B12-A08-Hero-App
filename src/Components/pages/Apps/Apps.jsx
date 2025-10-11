
import { Suspense } from 'react';
import App from '../App/App';
import AllApp from '../AllApp/AllApp';
import { Link } from 'react-router';

const Apps = ({data}) => {

    const trendingApps = data.slice(0, 8);

    // App card are looped through from here
    return (
        <div>
            <div className='mx-20 mt-20 mb-10 text-center justify-center'>
                <h2 className='text-5xl font-bold'>Trending Apps</h2>
                <p className='text-xl text-[#627382] font-normal mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-4 mx-20 max-sm:grid-cols-2'>
            <Suspense fallback={'Loading....'}>
                {
                    trendingApps.map((app)=> <App key={app.id} app={app}></App>)
                }
            </Suspense>
            </div>
            <div className='mt-10 mb-20 justify-center flex'>
                <Link to='/allapps'><button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white "><img src="/github-mark-white.png" className='w-[30px] ' alt="" /> Show All</button></Link>
            </div>
        </div>
    );
};

export default Apps;