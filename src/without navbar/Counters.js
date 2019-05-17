import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
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
    render(){
        return(
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.hadnleIncrement} onDecrement={this.hadleDecrement} counter={counter}  >
                        <h4>Counter: #{counter.id}</h4>
                    </Counter>
                )}
            </div>
        )
    }

}
export default Counters;