import React from 'react'
import classes from './FullPost.module.sass'

const fullPosts = ( props ) => {
  console.log('post render')
  return (
    <div className={classes.FullPost} onClick={props.clicked}>
      <h1>Title: {props.title}</h1>
      <div>Author: {props.author}</div>
    </div>
  )
}

export default React.memo(fullPosts)
