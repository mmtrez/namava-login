import React, {useState} from 'react';

import Input from '../input/input.jsx';
import {ShowIcon, HideIcon} from '../icons/icons.jsx';
import {mailRegExp} from '../../constants/regExp.js';

import classes from './styles.module.css';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validateMail = (email) => {
    return String(email).toLowerCase().match(mailRegExp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateMail(mail)) {
      console.log('invalid email');
    } else {
      console.log('api call');
    }
  };

  return (
    <form autocomplete="off" onSubmit={(e) => handleSubmit(e)}>
      <Input
        name="mail"
        title="ایمیل"
        type="mail"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <Input
        name="password"
        title="رمز عبور"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={
          showPassword ? (
            <HideIcon onClick={toggleShowPassword} />
          ) : (
            <ShowIcon onClick={toggleShowPassword} />
          )
        }
      />
      <button
        type="submit"
        className={classes.submitBtn}
        disabled={!Boolean(mail && password)}
      >
        ورود
      </button>
    </form>
  );
}

export default LoginForm;
