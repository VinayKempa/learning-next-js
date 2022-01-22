function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

// Executes on every incoming request. Not executes on build
export async function getServerSideProps(context) {
  return {
    props: {
      username: "Vinay",
    },
  };
}
