function UserDetail(props) {
  const { user } = props;
  return <pre>{JSON.stringify(user, null, 4)}</pre>;
}

export default UserDetail;
