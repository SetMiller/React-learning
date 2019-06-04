import React from 'react';
import classes from './App.module.css';
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'
import Inputs from '../components/inputs'
import Summ from '../components/summ';

class App extends React.Component{
  constructor(){
    super()

    // binds
    this.currentChangeHandler = this.currentChangeHandler.bind(this)
    this.currentChange = this.currentChange.bind(this)
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
    // console.log(index, event)
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
    const inputs = 
      <Inputs
        products = {this.state.products}
        changed={this.currentChangeHandler}
        change={this.currentChange}
      />

    const summ = 
      <Summ
        products = {this.state.products}
      />

    return (
      <React.Fragment>
        {summ}
        {inputs}
      </React.Fragment>
    );
  }
}

export default withClass(App, classes['wrapper'])