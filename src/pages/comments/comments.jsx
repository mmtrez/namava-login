import React from 'react';

import CommentField from '../../components/commentField/commentField.jsx';
import CommentLogin from '../../components/commentLogin/commentLogin.jsx';
import NoComment from '../../components/noComment/noComment.jsx';

import classes from './styles.module.css';

function Comments() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>نظرات کاربران</h1>
      <CommentLogin />
      <NoComment />
    </div>
  );
}

export default Comments;
