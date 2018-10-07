import React, { Component } from 'react';
import {setSearchData} from '../actions/index'
import {connect} from 'react-redux';

class Search extends Component {
  constructor(props){
    super();
    this.state={
      term:" "
    }
    this.onChangeHandle=this.onChangeHandle.bind(this);
    this.onSubmitHandle=this.onSubmitHandle.bind(this);
  }
  onSubmitHandle(e){
    e.preventDefault();
    let searchTerm=this.state.term.toUpperCase();
    console.log(this.state.term);
    let searchData=this.props.data.filter((item)=>{
      return item.SYMBOL.includes(searchTerm)
    })
    console.log(searchData);
    this.props.setSearchData(searchData);
  }
  onChangeHandle(e){
   this.setState({
     term:e.target.value
   });
  }
  render(){
    return(
      <div className="row" style={{ textAlign: 'center', padding: '10px' }}>
      <form  onSubmit={this.onSubmitHandle}>
        Search: <input type="text" onChange={this.onChangeHandle} name="search"/>
       <input type="submit" value="Submit"/>
     </form>
</div>
    )
  }


}
function mapStateToProps(state){
  return {
    data:state.data,
  }
}

export default connect(mapStateToProps,{setSearchData})(Search);
