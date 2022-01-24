import React from "react";
import UserDetailInList from "./mini-detail";
import classes from "../../styles/Home.module.css";
import Link from "next/link";

const UserList = (props) => {
  const { list } = props;
  return (
    <React.Fragment>
      <ul className={classes.list}>
        {(list || []).map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>
                <UserDetailInList user={user} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default UserList;
