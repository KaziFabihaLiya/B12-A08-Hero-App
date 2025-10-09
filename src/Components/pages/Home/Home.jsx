import React from 'react';
import Hero from '../../Hero/Hero';
import Banner from '../../Banner/Banner';
import Apps from '../Apps/Apps';

const fetchDataPromise = () => fetch('/appData.json').then(res=>res.json())
const Home = () => {

     
    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <Apps fetchDataPromise={fetchDataPromise}></Apps>
        </div>
    );
};

export default Home;