import logo from './logo.svg';
import './App.css';
import UserHeader from './components/UserHeader';
import ProposalView from './components/ProposalView';
import { useState } from 'react';
import ReactApexCharts from 'react-apexcharts'
// import Web3Test from './components/Web3Test';
const web3 = require('web3');
// const web3js = new web3("");
// import { newKit } from '@celo/contractkit'


const user = {
  name: "John Doe",
  balance: "100",
  vote_count: "10",
  proposal_count: "4",
  active_proposals: "2",
  emoji: "👾",
  roles: ["dev", "designer"]
}

const prop_tags = [
  {name:"Gov.", description:"Governance", color:"yellow1"},
  {name:"Funds", description:"allocation of funds", color:"lightBlue1"},
  {name:"Meeting", description:"orchestration of meeting ", color:"green1"},
  {name:"Project", description:"Project", color:"darkBlue2"},
  {name:"Snack", description:"Governance", color:"green2"},

]


const proposals = [
  {
    id: 1,
    name: "Proposal 1",
    description: "This is proposal 1",
    tags : [prop_tags[0]],
    status: "Open",
    vote_count: 10,
    quorum: 15,
    proposer: user,
    votes: [{ "option": "Yes", "count": 10 },
    { "option": "No", "count": 4 }]
  },
  {
    id: 1,
    name: "Make metamask great again",
    description: "This is proposal 1",
    tags : [prop_tags[0],prop_tags[2]],
    status: "Open",
    vote_count: 10,
    quorum: 15,
    proposer: user,
    votes: [{ "option": "Yes", "count": 10 },
    { "option": "No", "count": 4 }]
  },
  {
    id: 1,
    name: "Proposal 1",
    description: "This is proposal 1",
    tags : [prop_tags[0],prop_tags[1]],
    status: "closed",
    vote_count: 10,
    quorum: 15,
    proposer: user,
    votes: [{ "option": "Yes", "count": 10 },
    { "option": "No", "count": 4 }]
  },
]

async function getAccounts(web3js) {
  const accounts = await web3js.eth.getChainId();
  console.log(accounts)
  
  return accounts
}
function App() {
  const web3js = new web3(`https://alfajores-forno.celo-testnet.org`)
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="App container">
      <body>
        {/* <Web3Test /> */}
        {/* ~ ROUGH outline of page  order listed does not matter*/}
        <UserHeader {...user} />
        <button onClick={()=>setAccounts(getAccounts)}> test</button>
        <p>accounts</p>

        {/* SHOW active proposals (User should be able to click and vote on these) */}
        {/* Let user Create Proposal (modal components) */}
        <ProposalView proposals={proposals}  />


        {/*CONNECT User wallet*/}

        {/* SHOW  Outcomes of non-active Proposals*/}

      </body>
    </div>
  );
}

export default App;
