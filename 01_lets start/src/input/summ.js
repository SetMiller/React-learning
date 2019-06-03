import React from 'react'

class Summ extends React.Component {

   summ(){
      return this.props.products.reduce((total, product) => {
             return total + product.price * product.current
         },0)
   }

   render(){
      return (
         <div className={this.props.className}>
   {/* Функцию нужно сразу вызвать, тк вставляем результат ее вызова */}
               выбрано товара на {this.summ()} руб.
         </div>
      )
   }
}

export default Summ