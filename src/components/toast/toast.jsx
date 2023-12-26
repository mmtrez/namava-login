import React, {useEffect, useState} from 'react';

import {useToast} from './toastProvider.jsx';
import {WarningIcon} from '../icons/icons.jsx';

import classes from './styles.module.css';

function Toast({children, id}) {
  const {removeToast} = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={classes.toastWrapper}>
      <div className={classes.toast}>
        <WarningIcon className={classes.icon} />
        <span className={classes.message}>{children}</span>
      </div>
    </div>
  );
}

export default Toast;
