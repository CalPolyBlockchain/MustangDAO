import './index.css';
import App from './App';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import { Connectors } from 'web3-react'
import {ethers } from 'ethers'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {useState} from 'react';
import home_page_data from './home_page_data';
import { ConvexProvider, ConvexReactClient } from "convex-dev/react";
import convexConfig from "./convex.json";
const temp_user = {
  name: "John Doe",
  balance: "100",
  vote_count: "10",
  proposal_count: "4",
  active_proposals: "2",
  emoji: "👾",
  roles: ["dev", "designer"]
}
const convex = new ConvexReactClient(convexConfig.origin);

const connectWallet = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const accounts = await provider.send("eth_requestAccounts", []);
  this.setState({ selectedAddress: accounts[0],provider:provider })
}


export default function Wrapper(){
  const [connected, setConnected] = useState(false);
  const [user , setUser] = useState(temp_user);
  
    return(
<ConvexProvider convex={convex}>

  
        <div className='bg-poly-bg bg-contain bg-fixed text-white' > 
        <Navbar connected={connected} connectWallet={connectWallet}/>
        <BrowserRouter>
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/app" element={<App {...home_page_data} user={user} />} />
        </Routes>
      </BrowserRouter>
      </div>
      </ConvexProvider>
    );
}
