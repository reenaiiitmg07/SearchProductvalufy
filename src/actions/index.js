export const SET_DATA='SET_DATA';

export function setStockData(data){
  return{
    type:SET_DATA,
    payload:data
  }
}
