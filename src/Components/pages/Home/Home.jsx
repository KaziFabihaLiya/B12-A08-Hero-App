import React, { Suspense } from 'react';
import Hero from '../../Hero/Hero';
import Banner from '../../Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';


const Home = () => {
    //home page
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Hero></Hero>
            <Banner data={data}></Banner>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;