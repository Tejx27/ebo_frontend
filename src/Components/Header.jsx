import React, { Fragment} from "react";

import classes from "./Header.module.css";

const Header = () => {

  return (
    <Fragment>
      <div className={classes.header}>
        <h3>&#8592; Home</h3>
        <div className={classes.myacc}>
            <h2>My Account</h2>
        </div>
        <div className={classes.needhelp}>
            <h3>Need help?</h3>
        </div>
        <div className={classes.myacc}>
            <h1>Hello,<span className={classes.name}>Ramkrishna Pandey</span></h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
