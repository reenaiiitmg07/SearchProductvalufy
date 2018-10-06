import React, { Component } from 'react';
import {connect} from 'react-redux';

class Search extends Component {
  constructor(props){
    super();
    this.onSubmitHandle=this.onSubmitHandle.bind(this);
  }
  onSubmitHandle(e){
    e.preventDefault();
    console.log(e.target.value);
  }
  render(){
    return(
      <div className="row" style={{ textAlign: 'center', padding: '10px' }}>
      <form  onsubmit={this.onSubmitHandle}>
        Search: <input type="text" name="search"/>
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

export default connect(mapStateToProps,{})(Search);
