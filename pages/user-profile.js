function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

// Executes on every incoming request. Not executes on build
export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log("Server side code");
  return {
    props: {
      username: "Vinay",
    },
  };
}
