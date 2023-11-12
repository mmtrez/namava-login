import React from 'react';

import classes from './styles.module.css';

function Nav({handleLogout}) {
  return (
    <div className={classes.nav}>
      <button className={classes.logoutBtn} onClick={handleLogout}>
        خروج
      </button>
    </div>
  );
}

export default Nav;
