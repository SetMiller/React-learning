import React, {Component} from 'react';
import classes from './App.module.css';
import Inputs from './input/inputs'
import Summ from './input/summ';


export default class extends Component{
  constructor(){
    super()

    // binds
    this.currentChangeHandler = this.currentChangeHandler.bind(this)
    this.currentChangeHandler = this.currentChange.bind(this)
  }

  state = {
    products: [
      {price: 1000, rest: 10, current:0},
      {price: 2000, rest: 20, current:0},
      {price: 3000, rest: 30, current:0},
    ]
  }

  currentChangeHandler(index, value){
    const products = [...this.state.products]
    const product = {...this.state.products[index]}
    product.current = value
    products[index] = product
    this.setState({products})
  }

  currentChange(index, event){
    const products = [...this.state.products]
    const product = {...this.state.products[index]}
    if (event.target.defaultValue === '+'){
      product.current++
      if(product.current >= product.rest){
        product.current = product.rest
      }
    } else if (event.target.defaultValue === '-'){
      product.current--
      if(product.current <= 0){
        product.current = 0
      }
    }
    products[index] = product
    this.setState({products})
  }

  render(){
    console.log('[App] render')
    const input = 
      <Inputs
        products = {this.state.products}
        changed={this.currentChangeHandler.bind(this)}
        change={this.currentChange.bind(this)}
      />

    const summ = 
      <Summ
        className = "summ"
        products = {this.state.products}
      />

    return (
      <div className={classes['wrapper']}>
        {summ}
        {input}
      </div>
    );
  }
}

