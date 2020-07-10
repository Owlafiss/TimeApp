import ReacDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import moment from 'moment';
import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current Time is:<br></br>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </p>
        <p>
          Your time +30 mins:<br></br>
          {
            moment().add(30, 'minutes').calendar()
          }
          <br></br>Naverland 9 2600
        </p>
      
      </header>
    </div>
  );
}
export default App;
