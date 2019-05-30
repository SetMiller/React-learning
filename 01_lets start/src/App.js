import React, {Component} from 'react';
import './App.css';
import InputElement from './input/input'


export default class extends Component{
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
    if (event.target.defaultValue == '+'){
      product.current++
      if(product.current >= product.rest){
        product.current = product.rest
      }
    } else if (event.target.defaultValue == '-'){
      product.current--
      if(product.current <= 0){
        product.current = 0
      }
    }
    products[index] = product
    this.setState({products})
  }

  render(){

    const input = (
      this.state.products.map((product, i) => {
        return (
          <div className="product" key={i}>
            <p>цена товара: {product.price} руб.</p>
            <p>остаток товара: {product.rest} шт.</p>
            <p>выбрано товара: {product.current} шт.</p>
            <InputElement 
              className="element-wrapper"
              max={product.rest}
              min={0}
              current={product.current}
              changed={this.currentChangeHandler.bind(this, i)}
              change={this.currentChange.bind(this, i)}
            />
          </div>
        )
      })
    )

    const summ = (
      this.state.products.reduce((total, product) => {
        return total + product.price * product.current
      },0)
    )

    return (
      <div className="wrapper">
        <p className="summ">выбрано товара на {summ} руб.</p>
        {input}
      </div>
    );
  }
}

