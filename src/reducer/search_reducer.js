import {SET_SEARCH} from '../actions/index'
export default function setSearchData(state = [], action) {
  console.log(action);
  switch (action.type) {
  case SET_SEARCH:
    return state=[...action.payload]
  default:
    return state
  }
}
