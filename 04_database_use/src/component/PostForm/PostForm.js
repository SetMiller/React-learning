import React from 'react'
import classes from './PostForm.module.sass'
import Aux from '../../hoc/Aux'

const postForm = ( props ) => {
  console.log('fullpost render')
  let { title, author, clicked } = props
  return (
    <Aux>
      <h1>Title: {title}</h1>
      <div>Author: {author}</div>
      <div className={classes.Edit}>
        <button onClick={clicked}>Delete this Post</button>
      </div>
    </Aux>
  )
}

export default postForm
