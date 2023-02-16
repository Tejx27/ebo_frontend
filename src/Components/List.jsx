import React from "react";

import classes from "./List.module.css";

const List = () => {
  return (
    <div className={classes.strt}>
      <div class={classes.parent}>
        <div className={classes.child}>
          <h3>
            My Account <span className={classes.icon}>&#62;</span>
          </h3>
          <p>
            View, modify & track <br /> orders
          </p>
        </div>
        <div className={classes["vertical-line"]}></div>
        <div className={classes.child}>
          <h3>
            My Address <span className={classes.icon}>&#62;</span>
          </h3>
          <p>
            Edit, add or remove <br /> addresses
          </p>
        </div>
        <div className={classes["vertical-line"]}></div>
        <div className={classes.child}>
          <h3>
            Wallet <span className={classes.icon}>&#62;</span>
          </h3>
          <p>
            ebo wallet histroy and <br /> reedemed coins
          </p>
        </div>
        <div className={classes["vertical-line"]}></div>
        <div className={classes.child}>
          <h3>
            Refferal <span className={classes.icon}>&#62;</span>
          </h3>
          <p>
            invit your friends <br /> and earn rewards
          </p>
        </div>
        <div className={classes["vertical-line"]}></div>
        <div className={classes.child}>
          <h3>
            Saved ocassion <span className={classes.icon}>&#62;</span>
          </h3>
          <p>
            Save personal and beloved <br /> important event info
          </p>
        </div>
      </div>
      <hr className={classes.hr}/>
    </div>
  );
};

export default List;
