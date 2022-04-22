import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        {/* ~ ROUGH ouline of page  order listed does not matter*/}

        {/* SHOW active proposals (User should be able to click and vote on these) */}
        {/* Let user Create Proposal (modal components) */}


        {/*CONNECT User wallet*/}

        {/* SHOW  Outcomes of non-active Proposals*/}

      </body>
    </div>
  );
}

export default App;
