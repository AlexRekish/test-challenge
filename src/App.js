import React from 'react';

import Ticker from './containers/Ticker';
import Trades from './containers/Trades';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ticker />
        <Trades />
      </header>
    </div>
  );
}

export default App;
