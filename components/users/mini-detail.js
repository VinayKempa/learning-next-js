import React from "react";
import classes from "../../styles/Home.module.css";

const UserDetailInList = (props) => {
  const { user } = props;
  return (
    <React.Fragment>
      <div className={classes.card}>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
    </React.Fragment>
  );
};

export default UserDetailInList;
