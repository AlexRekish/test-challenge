import React from 'react';
import styled from 'styled-components';

import Ticker from './containers/Ticker';
import Trades from './containers/Trades';

import './App.css';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 50px;

  color: #fff;
  background-color: #282c34;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Ticker />
        <Trades />
      </Wrapper>
    </div>
  );
}

export default App;
