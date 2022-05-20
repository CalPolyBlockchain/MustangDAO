import logo from './logo.svg';
import './App.css';
import UserHeader from './components/UserHeader';
import ProposalView from './components/ProposalView';
import { useState } from 'react';
import ReactApexCharts from 'react-apexcharts'
import VoteModal from './modals/VoteModal';

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
  const [showNewProposalModal, setShowNewProposalModal] = useState(false);

  
  function toggleVoteModal(proposal) {
    setSelectedProposal(proposal);
    setShowVoteModal(!showVoteModal);
  }
  function toggleNewProposalModal() {
    setShowNewProposalModal(!showNewProposalModal);
  }

  return (
    <div className="App container">
      <body>
        {showVoteModal && <VoteModal proposal={selectedProposal} open={true} setOpen={()=>toggleVoteModal(selectedProposal)}/>}
       
        <UserHeader {...props.user} newProp={toggleNewProposalModal}/>
      <ProposalView proposals={mock_proposals} showVoteModal={toggleVoteModal} />
        {/* SHOW  Outcomes of non-active Proposals*/}
        {showNewProposalModal? <NewProposalModal setOpen={toggleNewProposalModal}/> : null}
        
      </body>
        
    </div>
  );
}

export default App;
