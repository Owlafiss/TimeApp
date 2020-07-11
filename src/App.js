import {CopyToClipboard} from 'react-copy-to-clipboard';
import moment from 'moment';
import React from 'react';

import timeDisplay from './Components/timeDisplay';

import logo from './logo.svg';
import './App.css';


function App() {

    let currentTime = moment().format('MM DD YYYY, k:mm:ss');
    let futureTime = moment().add(30, 'minutes').format('MM DD YYYY, k:mm:ss');
    const clipBoardText = `${futureTime} Naverland 9 2600`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <timeDisplay time = {currentTime} text = {'Current'}/>

        <timeDisplay time = {futureTime} text = {'Your'} />

        <CopyToClipboard text = {clipBoardText}>
          <button>
            Copy
          </button>
        </CopyToClipboard>
      </header>
    </div>
  );
}
export default App;
