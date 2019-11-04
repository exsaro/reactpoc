import React, { Component } from 'react';

class Product extends Component {
    state = {
        counter: this.props.value
    }
    render(){
        return(
            <div>
                <span className={`m-3 badge badge-${this.setDynamicClass()}`}>{this.formatCounter()}</span>
                <button className="btn btn-secondary m-2" onClick={this.incCounter}>+</button>
                <button className="btn btn-secondary m-2" onClick={this.decCounter} disabled={this.state.counter === 0}>-</button>
                <button className="btn btn-danger m-2" onClick={ this.props.deleteCount }>X</button>
            </div>
        )
    }

    formatCounter(){
       return this.state.counter === 0 ? 'Zero' : this.state.counter;
    }

    setDynamicClass(){
        return this.state.counter === 0 ? 'warning' : 'primary';
    }
    incCounter = () => {
        this.setState({counter: this.state.counter+1});
    }
    decCounter = () => {
        this.setState({counter: this.state.counter-1});
    }

};

export default Product;