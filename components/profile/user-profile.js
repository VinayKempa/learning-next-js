import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
//import { getSession } from "next-auth/react";
//import { useEffect, useState } from "react";

function UserProfile(props) {
  // Redirect away if NOT auth
  /*
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then((ses) => {
      if (!ses) {
        window.location.href = "/auth";
      }
      setLoading(false);
    });
  }, []);



  if (isLoading) {
    return <p className={classes.profile}>Loading ...</p>;
  }
  */

  async function changePasswordHandler(passData) {
    const result = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
