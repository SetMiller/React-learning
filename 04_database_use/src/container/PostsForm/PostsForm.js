

import React, { Component } from 'react'
import classes from './PostsForm.module.sass'
import AddForm from '../AddForm/AddForm'
import PostForm from '../../component/PostForm/PostForm'
import FullPost from '../../component/FullPost/FullPost'
import Spinner from '../../component/Spinner/Spinner'

import axios from '../../axios'

export default class PostsForm extends Component {

  state = {
    posts: [],
    names:[],
    error: null,
    selectedPostId: null,
    update: false,
    loading: false,
  }

  componentDidMount(){
    this.setState({loading: true})
    console.log('didMount')
    axios.get('/posts.json')
      .then(resp => {
        const respData = Object.values(resp.data) 
        const respNames = Object.keys(resp.data)
        this.setState({posts: respData, names: respNames, loading: false})
        // console.log(this.state)
      })
      .catch(err => {
        this.setState({error: err})
      })
  }

  idHandle = ( id ) => {
    this.setState({selectedPostId: id})
  }

  componentDidUpdate(){
    console.log('didUpdate')
  }

  deletePostHandler(){
    console.log(this.state.names[this.state.selectedPostId])

    const postToDel = this.state.names[this.state.selectedPostId]
    axios.delete('/posts/' + postToDel)
      .then(resp => console.log(resp))
  }

  render() {

    let fullPosts = null

    fullPosts = <div style={{textAlign: 'center', color: 'red', fontWeight: 800}}>Something went wrong...</div>
    if(!this.state.error){
      fullPosts = this.state.posts.map((post, i) => {
        return (
          <FullPost 
            key={i}
            title={post.title}
            author={post.author}
            clicked={() => this.idHandle( i )}
            wait={100 * (i + 1)}/>
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
