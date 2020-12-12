import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../../Components/SectionNine/Post/Post';
import FullPost from '../../../Components/SectionNine/FullPost/FullPost';
import NewPost from '../../../Components/SectionNine/NewPost/NewPost';

import classes from './Blog.css';

class Blog extends Component {

  state = {
    posts: [],
    postUpdateId: null,
    error: false
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatePosts = posts.map(post => {
          return { ...post, author: 'Max' }
        });
        this.setState({ posts: updatePosts });
        // console.log(response.data[4].body)
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
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
      <div>
        <section className={classes.Posts}>
          {posts}
        </section>
        <section>
          <FullPost id={this.state.postUpdateId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;