import React from 'react'
import InputElement from './input'

class Inputs extends React.Component {
   
   shouldComponentUpdate(nextProps, nextState){
      return true
   }
   
   render(){
      console.log('inputs rendering !!!!!!!!')
      return this.props.products.map((value, i) => {
            return (
               <div className="product" key={i}>
                  <p>цена товара: {value.price} руб.</p>
                  <p>остаток товара: {value.rest} шт.</p>
                  <p>выбрано товара: {value.current} шт.</p>
                  <InputElement
                     className="element-wrapper"
                     max={value.rest}
                     min={0}
                     current={value.current}
                     changed={() => this.props.changed( i )}
                     change={(event) => this.props.change( i, event )}
                  />
               </div>
            )
         })
   }
}

export default Inputs