

import React, { Component } from 'react'
import classes from './PostsForm.module.sass'
import AddForm from './AddForm/AddForm'
import PostForm from './PostForm/PostForm'
import FullPost from './FullPost/FullPost'

import axios from 'axios'

export default class PostsForm extends Component {

  state = {
    posts: [],
    error: null,
    selectedPostId: null,
  }

  componentDidMount(){
    axios.get('/', {params : {
      list: true
    }})
      .then(resp => {
        const respData = resp.data
        this.setState({posts: respData})
      })
      .catch(err => {
        this.setState({error: err})
      })
  }

  idHandle = ( id ) => {
    this.setState({selectedPostId: id})
  }

  deletePostHandler(){
    axios.delete('/', {params : {
      title: this.state.posts[this.state.selectedPostId].title
    }})
      .then(resp => console.log(resp))
  }

  render() {
    console.log(this.state)

    let fullPosts = <div style={{textAlign: 'center', color: 'red', fontWeight: 800}}>Something went wrong...</div>
    if(!this.state.error){
      fullPosts = this.state.posts.map((post, i) => {
        return (
          <FullPost 
            key={i}
            title={post.title}
            author={post.author}
            clicked={() => this.idHandle( i )}/>
        )
      })
    }

    let selectPost
    if (this.state.selectedPostId !== null) {
      selectPost = <PostForm 
                      title={this.state.posts[this.state.selectedPostId].title}
                      author={this.state.posts[this.state.selectedPostId].author}
                      clicked={this.deletePostHandler.bind(this)}/>
    } else {
      selectPost = <div>Please, select a Post</div>
    }

    return (
      <div className={classes.PostsForm}>
        <section className={classes.AddFormWrap}>
          <AddForm />
        </section>
        <section className={classes.PostFormWrap}>
          {selectPost}
        </section>
        <section className={classes.FullFormWrap}>
          {fullPosts}
        </section>
      </div>
    )
  }
}
