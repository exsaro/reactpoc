import React, { Component } from 'react';
import Product from './product';

class ShoppingList extends Component {
    state = { 
        counters: [
            {id:1, value: 0},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0},
            {id:5, value: 0}
        ]
     }
    render() { 
        return ( <div>{this.state.counters.map(counter=><Product key={counter.id} id={counter.id} value={counter.value} deleteCount={()=>this.delCounter(counter.id)} />) }</div> );
    }

    delCounter = (id) => {
        const filterCount = this.state.counters.filter(counter=> counter.id !== id);
        this.setState({counters: filterCount});
        //console.log(id);
    }
}
 
export default ShoppingList;