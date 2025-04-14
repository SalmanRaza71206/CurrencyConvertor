import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App';
import CurrencyConvert from '../pages/CurrencyConvert';
import NotFound from '../Components/NotFound';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

function Route() {
    const router = createBrowserRouter([{
       path:'/',
       element:<App/>,
       children: [
        {
            index:true,
            element:<CurrencyConvert/>,

        },
        {
            path:'signup',
            element:<Signup/>,

        },
        {
            path:'login',
            element:<Login/>,

        },
        
       ],
       errorElement:<NotFound/>
    }])
  return (
    <RouterProvider router={router}/>
  )
}

export default Route;
