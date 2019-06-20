import { WS_API_URL } from 'constants';

function connectToApi(channel, cb) {
  if (!channel || !cb) {
    return;
  }

  const tickerSocket = new WebSocket(WS_API_URL);

  tickerSocket.onopen = () => {
    console.log('Connected to socket');

    const msg = JSON.stringify({
      event: 'subscribe',
      channel,
      symbol: 'tBTCUSD',
    });

    tickerSocket.onmessage = message => {
      console.log(message);
      cb(message.data);
    };

    tickerSocket.send(msg);
  };
}

export default connectToApi;
