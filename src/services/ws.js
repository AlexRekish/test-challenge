import { WS_API_URL } from 'constants';

function connectToApi(channel, cb, disconnectCb) {
  if (!channel || !cb) {
    return;
  }

  const socket = new WebSocket(WS_API_URL);

  socket.onopen = () => {
    console.log('Connected to socket');

    const msg = JSON.stringify({
      event: 'subscribe',
      channel,
      symbol: 'tBTCUSD',
    });

    socket.onclose = () => {
      console.log('Disconnected from socket');
      disconnectCb();
    };

    socket.onmessage = message => {
      cb(message.data);
    };

    socket.send(msg);
  };
  return socket;
}

export default connectToApi;
