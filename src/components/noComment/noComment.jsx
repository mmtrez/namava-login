import React from 'react';

import {SmileyMessage} from '../icons/icons.jsx';

import classes from './styles.module.css';

function NoComment() {
  return (
    <div className={classes.container}>
      <SmileyMessage className={classes.icon} />
      <p>هنوز نظری ثبت نشده.</p>
      <p>اولین نفری باشید که نظر خود را ثبت می‌کند.</p>
    </div>
  );
}

export default NoComment;
