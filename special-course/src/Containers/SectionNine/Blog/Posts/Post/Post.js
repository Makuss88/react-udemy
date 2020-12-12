import React from 'react';

import classes from './Post.css';

const post = (props) => {

  const { title, author, clicked } = props;

  return (
    <article className={classes.Post} onClick={clicked}>
      <h1>{title}</h1>
      <div className={classes.Info}>
        <div className={classes.Author}>{author}</div>
      </div>
    </article>
  )
};

export default post;