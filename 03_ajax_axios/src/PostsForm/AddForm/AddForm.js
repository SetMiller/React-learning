import React from 'react'
import Aux from '../hoc/Aux'

import axios from 'axios'

class AddForm extends React.Component {

  state = {
    title: '',
    author: '',
    added: null
  }

  postDataHandler(){
    const params = {
      title: this.state.title,
      author: this.state.author
    }
    axios.post('/', params)
      .then(resp => {
        this.setState({added: null})
        if (resp.config.data){
          this.setState({added: resp.config.data})
        } else {
          this.setState({added: 'error'})
        }
        console.log([resp.config.data])
      })
      .catch(err => {
        console.log(err.stack)
        // if (err) {
        //   this.setState({error: err})
        // }
      })
  }

  render(){

    console.log(this.state)
    let addedResp = ''
    if(this.state.added !== null){
      addedResp = <div>Post added!!!</div>
    } else if (typeof this.state.added === 'string'){
      addedResp = <div>Something went wrong!!</div>
    } 
    return (
      <Aux>
        <h1>Add new Post</h1>
        <label>Title: </label>
        <input type="text" defaultValue={this.state.title} onBlur={(event)=>{
          console.log([event.target])
          this.setState({title: event.target.value})}} placeholder=" Type title..."/>
        <label>Author: </label>
        <input type="text" defaultValue={this.state.author} onBlur={(event)=>{this.setState({author: event.target.value})}} placeholder=" Type author..."/>
        <button onClick={this.postDataHandler.bind(this)}>Add new Post</button>
        <div>{addedResp}</div>
      </Aux>
    )
  }
  
}

export default AddForm
