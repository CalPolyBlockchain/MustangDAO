import './index.css';
import App from './App';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import { Connectors } from 'web3-react'

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {useState} from 'react';
import home_page_data from './home_page_data';
const temp_user = {
  name: "John Doe",
  balance: "100",
  vote_count: "10",
  proposal_count: "4",
  active_proposals: "2",
  emoji: "👾",
  roles: ["dev", "designer"]
}
export default function Wrapper(){
  const [connected, setConnected] = useState(false);
  const [user , setUser] = useState(temp_user);
  
    return(
        <div className='bg-poly-bg bg-contain bg-fixed text-white' > 
        <Navbar btnClick=''/>
        <BrowserRouter>
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/app" element={<App {...home_page_data} user={user} />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
}
