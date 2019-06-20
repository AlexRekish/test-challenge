import { combineReducers } from 'redux';

import ticker from './ticker';
import trades from './trades';

const rootReducer = combineReducers({ ticker, trades });

export default rootReducer;
