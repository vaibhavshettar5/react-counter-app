import React, { Component } from 'react';


class Counter extends Component {
  state = {
    count:0,
    tags: []
   
  };
  getEleme(){
    if(this.state.tags.length===0){
      return <h2>enter tags</h2>;
    }
    return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
  }
  Increment = () =>{
    console.log("count is",this.state.count);
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <React.Fragment>
          
          <span className={this.getClass()}>{ this.formatCount() }</span>
          <button className="btn btn-secondary btn-sm" onClick={this.Increment}>+</button>
         
      </React.Fragment>
    );
  }
  getClass(){
    let classes="badge m-2 badge-";
    classes+=this.state.count===0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const {count} = this.state;
    return count===0 ? "zero" : count; 
  }
}

export default Counter;
