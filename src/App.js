import React, { Component } from 'react';
import data from './data/data';
import {connect} from 'react-redux';
import {setStockData} from './actions/index'
import Search from './component/search'
class App extends Component {
  componentDidMount(){
    this.props.setStockData(data);
  }
  render() {
    console.log(this.props.data);
    let stocks=this.props.searchData.length>0?this.props.searchData:this.props.data
    return (

      <div className="App">
        <Search />
      <ul className="list-inline">
      {stocks.map((item)=>{
        return(
          <li>
          <div className="card" style={{border: "1px solid gray",width: "200px",height: "220px",padding:"10px 5px 5px 10px"}}>
             Symbol:{item.SYMBOL}
               <h6>Date:{item.DATE1}</h6>
               <p>Series:{item.SERIES}</p>
               <p>Avg_price:{item.AVG_PRICE}</p>
               <p>High price:{item.HIGH_PRICE}</p>
          </div>
          </li>
        )
      })}
      </ul>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    data:state.data,
    searchData:state.searchData
  }
}

export default connect(mapStateToProps,{setStockData})(App);
