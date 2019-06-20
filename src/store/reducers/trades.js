import { TradesAction } from '../actions';

const initialState = {
  trades: [],
  error: null,
};

const tradesReducer = (state = initialState, { type, trades, updateForTrades, error }) => {
  switch (type) {
    case TradesAction.GET_TRADES_SUCCESS:
      if (updateForTrades) {
        const oldTrades = [...state.trades];
        oldTrades.unshift(updateForTrades);
        oldTrades.pop();
        return {
          ...state,
          trades: oldTrades,
        };
      }
      return {
        ...state,
        trades: [...(trades || state.trades)],
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
