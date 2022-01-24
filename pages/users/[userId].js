import React from "react";
import UserDetail from "../../components/users/detail";
import { getUserDetail } from "../../helpers/api";

function UserDetailPage(props) {
  const { user } = props;
  return <UserDetail user={user} />;
}

export default UserDetailPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.userId;
  const userDetail = await getUserDetail(userId);
  return {
    props: {
      user: userDetail,
    },
  };
}
