import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import BaseLayout from './BaseLayout';

import { UserProvider } from './Context/MyContext';



const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
      <Route path='/' element={<BaseLayout />} >
        
        <Route path='' element={<Homepage />} />
       
        <Route path='homepage' element={<Homepage />} />
        


      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
