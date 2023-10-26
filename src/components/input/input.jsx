import React from 'react';

import classes from './styles.module.css';

function Input({name, title, icon, value, ...props}) {
  const showIcon = Boolean(icon && value);
  const inputClassNames = `${classes.input} ${value ? classes.ltr : ''}`;
  const labelClassNames = `${classes.label} ${value ? classes.visible : ''}`;

  return (
    <>
      <label htmlFor={name} className={labelClassNames}>
        {title}
      </label>
      <div className={classes.inputContainer}>
        {showIcon && <span className={classes.icon}>{icon}</span>}
        <input
          id={name}
          name={name}
          placeholder={title}
          className={inputClassNames}
          value={value}
          {...props}
        />
      </div>
    </>
  );
}

export default Input;
