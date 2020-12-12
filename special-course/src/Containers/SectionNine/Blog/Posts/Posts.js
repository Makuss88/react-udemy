import React, { Component } from 'react';
import axios from '../../../axios';

import Post from './Post/Post';

import classes from './Posts.css'

class Posts extends Component {

  state = {
    posts: [],
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatePosts = posts.map(post => {
          return { ...post, author: 'Max' }
        });
        this.setState({ posts: updatePosts });
        // console.log(respon se.data[4].body)
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      })
  }

  clickedHandler(id) {
    this.setState({ postUpdateId: id });
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong...</p>

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.clickedHandler(post.id)} />
      });
    }

    return (
      <section className={classes.Posts}>
        {posts}
      </section>);
  }
}

export default Posts;