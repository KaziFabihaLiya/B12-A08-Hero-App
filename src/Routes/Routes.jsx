import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Components/pages/Root/Root';
import ErrorPage from '../Components/pages/ErrorPage/ErrorPage';
import Home from '../Components/pages/Home/Home';
import AppDetails from '../Components/AppDetails/AppDetails';
import InstalledList from '../Components/pages/InstalledList/InstalledList';
import Apps from '../Components/pages/Apps/Apps';
import AllApp from '../Components/pages/AllApp/AllApp';

//Overall Routing of pages
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
            loader: ()=> fetch('appData.json'),
            path:'/allapps',
            Component: AllApp,
        },
        {
          path:'/installedList',
          loader: ()=> fetch('appData.json'),
          Component: InstalledList,
        },
        {
          path:'/installedList',
          loader: ()=> fetch('appData.json'),
          Component: AppDetails,
        },
        {
          path:'/appDetails',
          Component: Apps,
        },
        {
          path: '/appDetails/:appId',
          loader: ()=> fetch('appData.json'),
          Component: AppDetails
        }
    ]
  },
]);