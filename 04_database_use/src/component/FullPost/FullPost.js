import React from 'react'
import classes from './FullPost.module.sass'

class FullPosts extends React.Component {

  state = {
    show: false,
    upd: true
  }

  shouldComponentUpdate(nextProps, nextState){
    if(!this.state.upd){
      return false
    } else {
      this.setState({upd: false})
      return true
    }
  }

  componentWillMount(){
    setTimeout(() => {
      this.toShow.bind(this)()
    }, this.props.wait);
  }

  toShow(){
    this.setState({show: true})
  }

  render(){
    const { title, author, clicked} = this.props

    return (
      <div className={this.state.show ? classes.FullPost : classes.Hide} onClick={clicked}>
        <h1>Title: {title}</h1>
        <div>Author: {author}</div>
      </div>
    )
  }
}

export default FullPosts
