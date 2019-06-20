const TradesAction = {
  GET_TRADES: ' GET_TRADES',
  GET_TRADES_SUCCESS: 'GET_TRADES_SUCCESS',
  GET_TRADES_ERROR: 'GET_TRADES_ERROR',
};

function parseTrade(trade) {
  return {
    id: trade[0],
    timestamp: trade[1],
    amount: trade[2],
    price: trade[3],
  };
}

export const getTrades = symbol => ({ type: TradesAction.GET_TRADES, symbol });

export const getTradesSuccess = trades => {
  const parsedTrades = trades ? JSON.parse(trades) : [];
  let transformedTrades;
  let updateForTrades;

  if (parsedTrades[1] && parsedTrades[1].map) {
    transformedTrades = parsedTrades[1].map(item => parseTrade(item));
  } else if (
    parsedTrades[1] &&
    !parsedTrades[1].map &&
    parsedTrades[1] !== 'hb' &&
    parsedTrades[1] !== 'tu'
  ) {
    updateForTrades = {
      ...parseTrade(parsedTrades[2]),
    };
  }

  return { type: TradesAction.GET_TRADES_SUCCESS, trades: transformedTrades, updateForTrades };
};

export const getTradesError = error => ({ type: TradesAction.GET_TRADES_ERROR, error });

export default TradesAction;
