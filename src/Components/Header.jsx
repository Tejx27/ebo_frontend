import React, { Fragment } from "react";

import classes from "./Header.module.css";
import Image from "../assets/Edit.png";

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
          <div className={classes.parent}>
            <div className={classes.child}>
              <h1>
                Hello,<span className={classes.name}>Ramkrishna Pandey</span>
              </h1>
            </div>
            <div className={classes.child}>
              <p className={classes.para}>Edit<span className={classes.icon}><i class='fas fa-pen'></i></span></p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
