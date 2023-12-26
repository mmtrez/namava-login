import React from 'react';

import {LogoIcon} from '../icons/icons.jsx';

import classes from './styles.module.css';

function Heading() {
  return (
    <div className={classes.heading}>
      <LogoIcon className={classes.logo} />
      <button className={classes.registerBtn}>ثبت نام</button>
    </div>
  );
}

export default Heading;
