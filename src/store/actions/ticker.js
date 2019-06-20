const TickerAction = {
  GET_TICKER: 'GET_TICKER',
  GET_TICKER_SUCCESS: 'GET_TICKER_SUCCESS',
  GET_TICKER_ERROR: 'GET_TICKER_ERROR',
};

export const getTicker = symbol => ({ type: TickerAction.GET_TICKER, symbol });
export const getTickerSuccess = ticker => ({ type: TickerAction.GET_TICKER_SUCCESS, ticker });
export const getTickerError = error => ({ type: TickerAction.GET_TICKER_ERROR, error });

export default TickerAction;
