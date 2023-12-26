import React from 'react';

import {SmileyMessage} from '../icons/icons.jsx';

import classes from './styles.module.css';

function CommentLogin() {
  return (
    <div className={classes.container}>
      <div className={classes.titleRow}>
        <SmileyMessage className={classes.icon} />
        <span>برای ثبت نظر ابتدا وارد شوید.</span>
      </div>
      <div className={classes.btns}>
        <a href="#" role="button" className={classes.registerBtn}>
          ثبت نام
        </a>
        <a href="/login" role="button" className={classes.loginBtn}>
          ورود
        </a>
      </div>
    </div>
  );
}

export default CommentLogin;
