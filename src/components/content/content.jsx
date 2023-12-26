import React from 'react';

import LoginForm from '../loginForm/loginForm.jsx';

import classes from './styles.module.css';

function Content() {
  return (
    <div className={classes.content}>
      <h1 className={classes.title}>ورود از طریق ایمیل</h1>
      <p className={classes.subtitle}>لطفا ایمیل و رمز عبور خود را وارد کنید.</p>
      <LoginForm />
      <div className={classes.links}>
        <span>
          <a href="https://www.namava.ir/auth/recover-email">
            رمز عبور خود را فراموش کرده ام
          </a>
        </span>
        <span>
          <a href="https://www.namava.ir/auth/login-phone">
            ورود از طریق شماره تلفن همراه
          </a>
        </span>
      </div>
    </div>
  );
}
export default Content;
