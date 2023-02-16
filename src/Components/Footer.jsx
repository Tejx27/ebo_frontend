import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import Image from "../assets/Footer.png";

const Footer = () => {
  return (
    <div className={classes.center}>
      <div className={classes.parent}>
        <div className={classes.child}>
          <div className={classes.image}>
            <img className={classes.images} src={Image} alt="Bucket Image" />
          </div>
          <div className={classes.text}>
            <h1 class={classes.heading}>Looking to celebrate?</h1>
            <button class={classes.button}>Let's go</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
