import {CopyToClipboard} from 'react-copy-to-clipboard';
import moment from 'moment';
import React from 'react';

import TimeDisplay from './Components/TimeDisplay';

import logo from './logo.svg';
import './App.css';


function App() {

    let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    let futureTime = moment().add(30, 'minutes').format('MMMM Do YYYY, h:mm:ss a')
    const clipboardText = `${futureTime} Naverland 9 2600`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TimeDisplay time={currentTime} text={'Current'}/>
        <br/>
        <TimeDisplay time={futureTime} text={'Your'}/>

        <CopyToClipboard text={clipboardText}>
            <button>
                Copy
            </button>
        </CopyToClipboard>
      </header>
    </div>
  );
}
export default App;
