import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
          {this.props.children}
          <span className={this.getClass()}>{ this.formatCount() }</span>
          <button className="btn btn-secondary btn-sm" onClick={()=>this.props.onIncrement(this.props.counter)}> +</button>
          <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDecrement(this.props.counter)}>-</button>
          <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}>X</button>
          <br/>
      </React.Fragment>
    );
  }
  getClass(){
    let classes="badge m-2 badge-";
    classes+=this.props.counter.value===0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const {value} = this.props.counter;
    return value===0 ? "zero" : value; 
  }
}

export default Counter;