import { TradesAction } from '../actions';

const initialState = {
  trades: null,
  error: null,
};

const tradesReducer = (state = initialState, { type, trades, error }) => {
  switch (type) {
    case TradesAction.GET_TRADES_SUCCESS:
      return {
        ...state,
        trades,
      };
    case TradesAction.GET_TRADES_ERROR:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};

export default tradesReducer;
