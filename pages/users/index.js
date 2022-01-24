import UserList from "../../components/users/list";
import { getAllUsersWhoWorkWithLLC } from "../../helpers/api";

function Users(props) {
  const { list } = props;
  return <UserList list={list} />;
}

export default Users;

export async function getStaticProps(context) {
  const usersFromLLC = await getAllUsersWhoWorkWithLLC();
  return {
    props: {
      list: usersFromLLC,
    },
  };
}
