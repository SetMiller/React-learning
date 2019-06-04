import React, { Component, Fragment } from 'react'
import withClass from '../hoc/withClass'
import classes from './components.module.css'

class Summ extends Component {

   summ(){
      return this.props.products.reduce((total, product) => {
             return total + product.price * product.current
         },0)
   }

   render(){
      return (
         <Fragment>
            {/* Функцию нужно сразу вызвать, тк вставляем результат ее вызова */}
               выбрано товара на {this.summ()} руб.
         </Fragment>
   //       <div className={this.props.className}>
         
   // {/* Функцию нужно сразу вызвать, тк вставляем результат ее вызова */}
   //             выбрано товара на {this.summ()} руб.
   //       </div>
      )
   }
}

export default withClass(Summ, classes['summ'])