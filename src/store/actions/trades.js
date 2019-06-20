const TradesAction = {
  GET_TRADES: ' GET_TRADES',
  GET_TRADES_SUCCESS: 'GET_TRADES_SUCCESS',
  GET_TRADES_ERROR: 'GET_TRADES_ERROR',
};

export const getTrades = symbol => ({ type: TradesAction.GET_TRADES, symbol });
export const getTradesSuccess = trades => ({ type: TradesAction.GET_TRADES_SUCCESS, trades });
export const getTradesError = error => ({ type: TradesAction.GET_TRADES_ERROR, error });

export default TradesAction;
