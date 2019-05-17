import React, { Component } from 'react';
//import logo from './logo.svg';
import Counters from './Counters';
import Nav from './Nav';
import './App.css';

class App extends Component {

  state = {
    counters: [
        { id:1, value:1 },
        { id:2, value:0 },
        { id:3, value:2 },
        { id:4, value:0 }
    ]
  } 
  hadnleIncrement = counter =>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  }
  hadleDecrement = counter =>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      if(counters[index].value>0){
      counters[index].value--;
      this.setState({counters});
      }
  }
  handleDelete = (counterId) =>{
      console.log("Event Handler called", counterId);
      const counters = this.state.counters.filter(c=> c.id !== counterId);
      this.setState({counters:counters})
  }
  handleReset = () =>{
      const counters = this.state.counters.map( c=> { c.value=0; return c; } );        
      this.setState({ counters })//both assignment are same
  }

  render() {
    return (
      <React.Fragment>
        <Nav totalCounters={this.state.counters.filter(c=> c.value > 0).length } />
        <div className="container">
        <Counters counters={this.state.counters} onDelete={this.handleDelete} onIncrement={this.hadnleIncrement} onDecrement={this.hadleDecrement} onReset={this.handleReset} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
