const TickerAction = {
  GET_TICKER: 'GET_TICKER',
  GET_TICKER_SUCCESS: 'GET_TICKER_SUCCESS',
  GET_TICKER_ERROR: 'GET_TICKER_ERROR',
};

export const getTicker = symbol => ({ type: TickerAction.GET_TICKER, symbol });

export const getTickerSuccess = ticker => {
  try {
    const parsedTicker = ticker ? JSON.parse(ticker) : [];
    let tickerObj;

    if (parsedTicker[1] && parsedTicker[1].map) {
      const tickerData = parsedTicker[1];
      tickerObj = {
        bid: tickerData[0],
        bidSize: tickerData[1],
        ask: tickerData[2],
        askSize: tickerData[3],
        dailyChange: tickerData[4],
        dailyChangePercent: tickerData[5],
        lastPrice: tickerData[6],
        volume: tickerData[7],
        high: tickerData[8],
        low: tickerData[9],
      };
    }
    return { type: TickerAction.GET_TICKER_SUCCESS, ticker: tickerObj || null };
  } catch (err) {
    console.warn(err);
  }
};

export const getTickerError = error => ({ type: TickerAction.GET_TICKER_ERROR, error });

export default TickerAction;
