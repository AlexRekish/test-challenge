/* eslint-disable */
import { TickerAction } from '../actions';

const initialState = {
  ticker: null,
  error: null,
};

const tickerReducer = (state = initialState, { type, ticker, error }) => {
  switch (type) {
    case TickerAction.GET_TICKER_SUCCESS:
      const parsedTicker = ticker ? JSON.parse(ticker) : [];
      return {
        ...state,
        ticker: parsedTicker[1] && parsedTicker[1].map ? parsedTicker : state.ticker,
      };
    case TickerAction.LOAD_POSTS_FAILED:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};

export default tickerReducer;
