/* eslint-disable */
import { TickerAction } from '../actions';

const initialState = {
  ticker: null,
  error: null,
};

const tickerReducer = (state = initialState, { type, ticker, error }) => {
  switch (type) {
    case TickerAction.GET_TICKER_SUCCESS:
      return {
        ...state,
        ticker: ticker || state.ticker,
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
