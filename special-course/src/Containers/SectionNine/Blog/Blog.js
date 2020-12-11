import React, { Component } from 'react';

import Post from '../../../Components/SectionNine/Post/Post';
import FullPost from '../../../Components/SectionNine/FullPost/FullPost';
import NewPost from '../../../Components/SectionNine/NewPost/NewPost';
import classes from './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div>
        <section className={classes.Posts}>
          <Post />
          <Post />
          <Post />
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;