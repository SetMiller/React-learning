import React, { Component, Fragment } from 'react';
import classes from './input.module.css';
import withClass from '../../hoc/withClass'


class InputElement extends Component {
   
   constructor(){
      super()
      
      // binds
      this.normalize = this.normalize.bind(this)
   }
   
   shouldComponentUpdate(nextProps, nextState){
      console.log('[Input.js] shouldComponentUpdate')
      if (nextProps.current === this.props.current){
      return false
      }  else {
      return true
      }
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
               <Fragment>
                  <input className={classes['product__change']} type="button" defaultValue="-" onClick={this.props.change} />
                  <input className={classes['product__value']} type="text" 
                     value={this.props.current} 
                     onChange={this.normalize}
                  />
                  <input className={classes['product__change']} type="button" defaultValue="+" onClick={this.props.change} />
               </Fragment>
               
            )
   }
}

export default withClass(InputElement, classes['element-wrapper'])