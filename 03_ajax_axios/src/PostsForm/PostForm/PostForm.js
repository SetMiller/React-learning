import React from 'react'
import classes from './PostForm.module.sass'
import Aux from '../../hoc/Aux'

const postForm = ( props ) => {
  console.log('fullpost render')
  return (
    <Aux>
      <h1>Title: {props.title}</h1>
      <div>Author: {props.author}</div>
      <div className={classes.Edit}>
        <button onClick={props.clicked}>Delete this Post</button>
      </div>
    </Aux>
  )
}

export default postForm
