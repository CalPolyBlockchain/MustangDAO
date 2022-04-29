import logo from './logo.svg';
import './App.css';
import UserHeader from './components/UserHeader';
import ProposalView from './components/ProposalView';
import { useState } from 'react';
import ReactApexCharts from 'react-apexcharts'
// import Web3Test from './components/Web3Test';
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
    description: "This is proposal here could go some real meaty text, almost as meaty as the rest of the page",
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


function App() {
  return (
    <div className="App container">
      <body>
        {/* <Web3Test /> */}
        {/* ~ ROUGH outline of page  order listed does not matter*/}
        <UserHeader {...user} />

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
