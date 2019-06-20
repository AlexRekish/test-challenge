import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import is from 'styled-is';

import { getTickerSuccess } from '../../store/actions';
import { connectToApi } from '../../services';
import { Wrapper, Header, WsButton, ConnectionIndicator } from '../../components';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 15px;
`;

const InfoLine = styled.span`
  padding: 5px 0;
  font-size: 16px;

  ${is('header')`
    font-size: 24px;
    font-weight: bold;
  `};

  ${is('positive')`
    color: green;
  `};

  ${is('negative')`
    color: red;
  `};

  ${is('volume')`
    text-decoration: underline;
    cursor: help;
  `}
`;

class Ticker extends Component {
  state = {
    isConnected: false,
  };

  componentDidMount() {
    const { connectToTicker } = this.props;
    this.socket = connectToApi('ticker', connectToTicker, this.handleDisconnect);

    this.setState({
      isConnected: true,
    });
  }

  componentWillUnmount() {
    this.socket.close();
  }

  handleDisconnect = () => {
    this.setState({ isConnected: false });
  };

  handleWsButtonClick = e => {
    e.preventDefault();

    const { connectToTicker } = this.props;
    const { isConnected } = this.state;

    if (isConnected) {
      this.socket.close();
    } else {
      this.socket = connectToApi('ticker', connectToTicker, this.handleDisconnect);

      this.setState({
        isConnected: true,
      });
    }
  };

  render() {
    const { ticker } = this.props;

    const { isConnected } = this.state;

    if (!ticker) {
      return null;
    }

    return (
      <>
        <Header>
          Ticker
          <ConnectionIndicator isConnected={isConnected} />
        </Header>
        <Wrapper>
          <InfoWrapper>
            <InfoLine header>BTC/USD</InfoLine>
            <InfoLine
              volume
              title={`24h VOL ${ticker.volume} (~ ${(ticker.volume * ticker.lastPrice).toFixed(
                0
              )})`}
            >
              {`VOL: ${(ticker.volume * ticker.lastPrice).toFixed(0)} USD`}
            </InfoLine>
            <InfoLine>{`LOW: ${ticker.low}`}</InfoLine>
          </InfoWrapper>
          <InfoWrapper>
            <InfoLine header>{ticker.lastPrice.toFixed(1)}</InfoLine>
            <InfoLine positive={ticker.dailyChange > 0} negative={ticker.dailyChange < 0}>
              {`${ticker.dailyChange.toFixed(2)} (${(ticker.dailyChangePercent * 100).toFixed(
                2
              )}%)`}
            </InfoLine>
            <InfoLine>{`HIGH: ${ticker.high}`}</InfoLine>
          </InfoWrapper>
        </Wrapper>
        <WsButton isConnected={isConnected} onClick={this.handleWsButtonClick}>
          {isConnected ? 'Disable ticker WS' : 'Enable ticker WS'}
        </WsButton>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ticker: state.ticker.ticker,
});

const mapDispatchToProps = dispatch => ({
  connectToTicker: data => dispatch(getTickerSuccess(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ticker);
