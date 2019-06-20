import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTradesSuccess } from '../../store/actions';
import { connectToApi } from '../../services';

class Trades extends Component {
  componentDidMount() {
    const { connectToTicker } = this.props;
    connectToApi('trades', connectToTicker);
  }

  componentWillUnmount() {
    WebSocket.close();
  }

  render() {
    return <div />;
  }
}

const mapDispatchToProps = dispatch => ({
  connectToTicker: data => dispatch(getTradesSuccess(data)),
});

export default connect(
  null,
  mapDispatchToProps
)(Trades);
