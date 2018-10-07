export const SET_DATA='SET_DATA';
export const SET_SEARCH='SET_SEARCH';

export function setStockData(data){
  return{
    type:SET_DATA,
    payload:data
  }
}
export function setSearchData(data){
  return{
    type:SET_SEARCH,
    payload:data
  }
}
