import {SET_DATA} from '../actions/index'
export default function setStockData(state = [], action) {
  console.log(action.payload);
  switch (action.type) {
  case SET_DATA:
    return state=[...action.payload.data]
  default:
    return state
  }
}
