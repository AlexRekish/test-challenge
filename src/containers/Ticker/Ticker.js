import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTickerSuccess } from '../../store/actions';
import { connectToApi } from '../../services';

class Ticker extends Component {
  componentDidMount() {
    const { connectToTicker } = this.props;
    connectToApi('ticker', connectToTicker);
  }

  componentWillUnmount() {
    WebSocket.close();
  }

  render() {
    return <div />;
  }
}

const mapDispatchToProps = dispatch => ({
  connectToTicker: data => dispatch(getTickerSuccess(data)),
});

export default connect(
  null,
  mapDispatchToProps
)(Ticker);
