import React, { Component } from 'react';
// import axios from 'axios';

import { Route, Link } from 'react-router-dom';

import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost';

import classes from './Blog.css';

class Blog extends Component {



  render() {

    return (
      <div>

        <header>
          <nav>
            <ul className={classes.Lista}>
              <li className={classes.Punkt}> <Link to="/" className={classes.Ahref}>Home</Link></li>
              <li className={classes.Punkt}> <Link to={{
                pathname: '/new-post',
                search: '?quick-submit=true',
                hash: '#submit',
              }}
                className={classes.Ahref}>New Post</Link></li>
            </ul>
          </nav>
        </header>

        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />

        {/* <Posts /> */}
      </div >
    );
  }
}

export default Blog;