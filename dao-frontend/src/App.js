import logo from './logo.svg';
import './App.css';
import UserHeader from './components/UserHeader';
import ProposalView from './components/ProposalView';

const user = {
    name: "John Doe",
    balance: "100",
    vote_count: "10"
}

const proposals = [
    { id: 1, name: "Proposal 1", description: "This is proposal 1", status: "Open", vote_count: "10", votes: [{"option": "Yes", "count": 10}, {"option": "No", "count": 4}] },
]
function App() {
  return (
    <div className="App">
      <body>
        {/* ~ ROUGH outline of page  order listed does not matter*/}
        <UserHeader {...user}/>

        {/* SHOW active proposals (User should be able to click and vote on these) */}
        {/* Let user Create Proposal (modal components) */}
        

        {/*CONNECT User wallet*/}

        {/* SHOW  Outcomes of non-active Proposals*/}

      </body>
    </div>
  );
}

export default App;
