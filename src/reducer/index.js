import { combineReducers } from 'redux';
import Data from './stock_reducer';
const rootReducer = combineReducers({
  data:Data
});

export default rootReducer;
