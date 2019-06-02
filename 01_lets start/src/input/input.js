import React, { useEffect } from 'react';
import './input.css';



function InputElement(props){

   useEffect(() => {
      console.log('[input] useEffect')
   })

   const normalize = (event) => {
      console.log([event.target])
      let newValue = parseInt(event.target.value) 
      if (isNaN(newValue) || newValue < props.min){
         newValue = props.min
      } else if (newValue > props.max) {
         newValue = props.max
      }  
      props.changed(newValue)
   }

   return (
      <div className={props.className}>
         <input className="product__change" type="button" defaultValue="-" onClick={props.change} />
         <input className="product__value" type="text" 
            value={props.current} 
            onChange={normalize}
         />
         <input className="product__change" type="button" defaultValue="+" onClick={props.change} />
      </div>
   )
}

export default InputElement