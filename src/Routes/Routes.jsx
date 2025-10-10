import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Components/pages/Root/Root';
import ErrorPage from '../Components/pages/ErrorPage/ErrorPage';
import Home from '../Components/pages/Home/Home';
import AppDetails from '../Components/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: ()=> fetch('appData.json'),
            path:'/',
            Component: Home,
        },
        {
          path: '/appDetails/:appId',
          loader: ()=> fetch('appData.json'),
          Component: AppDetails
        }
    ]
  },
]);