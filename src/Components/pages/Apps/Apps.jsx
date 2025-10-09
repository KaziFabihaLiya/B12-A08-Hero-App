import React, { use } from 'react';
import App from '../App/App';

const Apps = ({fetchDataPromise}) => {

    const dataApp = use(fetchDataPromise)

    console.log(dataApp)
    return (
        <div>
            <h2>Trending Apps</h2>
            <p>Explore All Trending Apps on the Market developed by us</p>
            <div>
                {
                    dataApp.map((app)=> <App app={app}></App>)
                }
            </div>
        </div>
    );
};

export default Apps;