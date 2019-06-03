import React, { Component } from 'react';
import './input.css';


class InputElement extends Component {
   
   shouldComponentUpdate(nextProps, nextState){
      console.log('[Input.js] shouldComponentUpdate')
      if (nextProps.current === this.props.current){
      return false
      }  else {
      return true
      }
   }

   getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('[Input.js] getSnapshotBeforeUpdate')
      return { message: 'Input Snapshot!'}
   }

   componentDidUpdate(prevProps, prevState, snapshot){
      console.log('[Input.js] componentDidUpdate')
      console.log(snapshot)
   }

   componentWillUnmount(){
      console.log('[Input.js] componentWillUnmount')
   }

   normalize(event){
      console.log([event.target])
      let newValue = parseInt(event.target.value) 
      if (isNaN(newValue) || newValue < this.props.min){
         newValue = this.props.min
      } else if (newValue > this.props.max) {
         newValue = this.props.max
      }  
      this.props.changed(newValue)
   }

   render(){
      console.log('[input] rendering !!!!!!!!!')
      return (
               <div className={this.props.className}>
                  <input className="product__change" type="button" defaultValue="-" onClick={this.props.change} />
                  <input className="product__value" type="text" 
                     value={this.props.current} 
                     onChange={this.normalize.bind(this)}
                  />
                  <input className="product__change" type="button" defaultValue="+" onClick={this.props.change} />
               </div>
            )
   }
}

export default InputElement