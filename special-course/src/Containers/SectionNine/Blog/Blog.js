import React, { Component } from 'react';
// import axios from 'axios';

import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import classes from './Blog.css';

class Blog extends Component {

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul className={classes.Lista}>
              <li className={classes.Punkt}> <NavLink
                to="/" className={classes.Ahref}
                exact
                activeClassName={'my-active'}>Home</NavLink></li>
              <li className={classes.Punkt}> <NavLink
                to={{
                  pathname: '/new-post',
                  search: '?quick-submit=true',
                  hash: '#submit',
                }}
                className={classes.Ahref}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" component={FullPost} />
        </Switch>
        {/* <Posts /> */}
      </div >
    );
  }
}

export default Blog;