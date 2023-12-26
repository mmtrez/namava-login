import React from 'react';
import cx from 'classnames';
('classnames');

import classes from './styles.module.css';

function Input({name, title, icon, value, ...props}) {
  const showIcon = Boolean(icon && value);

  return (
    <>
      <label htmlFor={name} className={cx(classes.label, {[classes.visible]: value})}>
        {title}
      </label>
      <div className={classes.inputContainer}>
        {showIcon && <span className={classes.icon}>{icon}</span>}
        <input
          id={name}
          name={name}
          placeholder={title}
          className={cx(classes.input, {[classes.ltr]: value})}
          value={value}
          {...props}
        />
      </div>
    </>
  );
}

export default Input;
