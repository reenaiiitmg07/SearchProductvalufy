import React, { Component } from 'react';
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
    console.log(this.state.term);
    console.log(e.target.name);
  }
  onChangeHandle(e){
   this.setState({
     term:e.target.value
   });
  }
  render(){
    return(
      <div className="row" style={{ textAlign: 'center', padding: '10px' }}>
      <form  onsubmit={this.onSubmitHandle}>
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

export default connect(mapStateToProps,{})(Search);
