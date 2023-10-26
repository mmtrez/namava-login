import React from 'react';

import Heading from '../components/heading/heading.jsx';
import Content from '../components/content/content.jsx';

import classes from './styles.module.css';

function Login() {
  return (
    <div className={classes.loginPage}>
      <div className={classes.container}>
        <Heading />
        <Content />
      </div>
    </div>
  );
}

export default Login;
