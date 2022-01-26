import logo from './logo.svg';
import './App.css';

import Web3 from 'web3';

class App extends Component {

  async componentDidMount() {

  }

  initWeb3 = async () => {
    if(window.ethereum) {
      this.web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Accounts now exposed
        // this.web3.eth.sendTransaction({/* ... */});
      } catch (error) {
        // User denied account access
        console.log(`User denied account access error :${error}`);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      // this.web3.eth.sendTransaction({});
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }
  render () {
    return(
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
      </div>
    );
  }
}

export default App;
