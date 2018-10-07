import { combineReducers } from 'redux';
import Data from './stock_reducer';
import SearchData from './search_reducer';
const rootReducer = combineReducers({
  data:Data,
  searchData:SearchData
});

export default rootReducer;
