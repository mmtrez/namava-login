import React, {useState} from 'react';
import {Player} from '@lottiefiles/react-lottie-player';

import Input from '../input/input.jsx';
import {ShowIcon, HideIcon} from '../icons/icons.jsx';
import {mailRegExp} from '../../constants/regExp.js';
import errorMessages from '../../constants/errorMessages.js';
import {useToast} from '../toast/toastProvider.jsx';
import login from '../../services/login.js';

import classes from './styles.module.css';
import loadingJSON from '../../../public/assets/loading.json';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({mail: '', password: ''});
  const [loading, setLoading] = useState(false);
  const {addToast} = useToast();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validateMail = (email) => {
    return String(email).toLowerCase().match(mailRegExp);
  };

  const handleChange = (e) => {
    const target = e.target;
    setLoginData((prev) => ({...prev, [target.name]: target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mail = loginData.mail;
    const password = loginData.password;

    if (!validateMail(mail)) {
      return addToast(errorMessages[10002]);
    }

    setLoading(true);
    const response = await login(mail, password);
    setLoading(false);

    if (!response.succeeded) {
      return addToast(errorMessages[response.error.code]);
    }

    alert('SUCCESS.');
  };

  return (
    <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
      <Input
        name="mail"
        title="ایمیل"
        type="mail"
        value={loginData.mail}
        onChange={handleChange}
      />
      <Input
        name="password"
        title="رمز عبور"
        type={showPassword ? 'text' : 'password'}
        value={loginData.password}
        onChange={handleChange}
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
        disabled={!Boolean(loginData.mail && loginData.password)}
      >
        {loading ? (
          <Player autoplay loop src={loadingJSON} className={classes.loading}></Player>
        ) : (
          'ورود'
        )}
      </button>
    </form>
  );
}

export default LoginForm;
