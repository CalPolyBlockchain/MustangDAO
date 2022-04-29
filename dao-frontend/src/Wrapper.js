import './index.css';
import App from './App';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import { Connectors } from 'web3-react'

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {useState} from 'react';
import home_page_data from './home_page_data';

export default function Wrapper(){
    return(
        <div className='bg-poly-bg bg-contain bg-fixed text-white' > 
        <Navbar />
        <BrowserRouter>
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/app" element={<App {...home_page_data} />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
}
