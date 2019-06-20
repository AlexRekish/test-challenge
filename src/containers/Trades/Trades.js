import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import is from 'styled-is';
import format from 'date-fns/format';

import { getTradesSuccess } from '../../store/actions';
import { connectToApi } from '../../services';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #fff;
`;

const Header = styled.h2`
  margin: 0;
  padding: 20px 0 15px;
`;

const Table = styled.table`
  width: 1000px;
  border-collapse: collapse;
`;

const Row = styled.tr`
  background-color: rgba(255, 0, 0, 0.3);

  &:not(:last-of-type) td {
    border-bottom: 1px solid #fff;
  }

  ${is('positive')`
    background-color: rgba(0, 255, 0, 0.3);
  `};
`;

const Th = styled.th`
  padding: 15px 30px;
  border-bottom: 1px solid #fff;
  font-size: 18px;
`;

const Td = styled.td`
  padding: 10px 20px;
  border-top: 1px solid #fff;
  font-size: 16px;
`;

const WsButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;

  appearance: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.2s;
  font-size: 16px;

  &:hover {
    color: ${({ isConnected }) => (isConnected ? 'red' : 'green')};
  }
`;

class Trades extends Component {
  state = {
    isConnected: false,
  };

  componentDidMount() {
    const { connectToTrades } = this.props;
    this.socket = connectToApi('trades', connectToTrades, this.handleDisconnect);

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

    const { connectToTrades } = this.props;
    const { isConnected } = this.state;

    if (isConnected) {
      this.socket.close();
    } else {
      this.socket = connectToApi('trades', connectToTrades, this.handleDisconnect);

      this.setState({
        isConnected: true,
      });
    }
  };

  render() {
    const { trades } = this.props;
    const { isConnected } = this.state;

    if (!trades) {
      return null;
    }

    return (
      <>
        <Header>Trades</Header>
        <Wrapper>
          <Table>
            <thead>
              <tr>
                <Th scope="col">Time</Th>
                <Th scope="col">Price</Th>
                <Th scope="col">Amount</Th>
              </tr>
            </thead>
            <tbody>
              {trades.map(({ id, timestamp, price, amount }) => (
                <Row key={id} positive={amount > 0}>
                  <Td>{format(timestamp, 'H:mm:ss')}</Td>
                  <Td>{price.toFixed(1)}</Td>
                  <Td>{Math.abs(amount).toFixed(4)}</Td>
                </Row>
              ))}
            </tbody>
          </Table>
        </Wrapper>
        <WsButton isConnected={isConnected} onClick={this.handleWsButtonClick}>
          {isConnected ? 'Disable trades WS' : 'Enable trades WS'}
        </WsButton>
      </>
    );
  }
}

const mapStateToProps = state => ({
  trades: state.trades.trades,
});

const mapDispatchToProps = dispatch => ({
  connectToTrades: data => dispatch(getTradesSuccess(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trades);
