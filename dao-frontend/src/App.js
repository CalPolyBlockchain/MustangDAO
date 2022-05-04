import logo from './logo.svg';
import './App.css';
import UserHeader from './components/UserHeader';
import ProposalView from './components/ProposalView';
import { useState } from 'react';
import ReactApexCharts from 'react-apexcharts'
import Metamask from './modals/Metamask';
import VoteModal from './modals/VoteModal';
import ConnectButton from './components/ConnectButton';
import {mock_proposals} from './mock_proposals';

import NewProposalModal from './modals/NewProposalModal';
// import { useQuery, useMutation } from "./convex/_generated";
const user = {
  name: "John Doe",
  balance: "100",
  vote_count: "10",
  proposal_count: "4",
  active_proposals: "2",
  emoji: "👾",
  roles: ["dev", "designer"]
}


function App(props) {
  // const getProposals = useQuery("getProposals")?? [];
  // const newProposal = useMutation("newProposal");

  const [showVoteModal, setShowVoteModal] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState(null);
  
  function toggleVoteModal(proposal) {
    setSelectedProposal(proposal);
    setShowVoteModal(!showVoteModal);
  }

  return (
    <div className="App container">
      <body>
        {showVoteModal && <VoteModal proposal={selectedProposal} open={true} setOpen={()=>toggleVoteModal(selectedProposal)}/>}
        {/* {showNewProposalModal && <NewProposalModal open={true} setOpen={()=>toggleNewProposalModal(selectedProposal)}/>} */}
        <ConnectButton/>
        <UserHeader {...props.user} />
        {/* SHOW active proposals (User should be able to click and vote on these) */}
      <ProposalView proposals={mock_proposals} showVoteModal={toggleVoteModal} />
        {/* SHOW  Outcomes of non-active Proposals*/}
        {/* <NewProposalModal/> */}
        
      </body>
        
    </div>
  );
}

export default App;
