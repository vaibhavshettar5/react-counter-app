import React, { Component } from 'react';



class Counter extends Component {
  state = {
    value: this.props.counter.value,
   
  };
  getEleme(){
    if(this.state.tags.length===0){
      return <h2>enter tags</h2>;
    }
    return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
  }
  Increment = () =>{

    this.setState({value: this.state.value + 1})
  }

  render() {
    return (
      <React.Fragment>
          {this.props.children}
          <span className={this.getClass()}>{ this.formatCount() }</span>
          <button className="btn btn-secondary btn-sm" onClick={this.Increment}> +</button>
          <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}>-</button>
          <br/>
      </React.Fragment>
    );
  }
  getClass(){
    let classes="badge m-2 badge-";
    classes+=this.state.value===0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const {value} = this.state;
    return value===0 ? "zero" : value; 
  }
}

export default Counter;
