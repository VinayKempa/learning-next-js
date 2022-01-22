import { useEffect, useState } from "react";

function LastUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((respData) => {
        setUsers(respData);
        setLoading(false);
      })
      .catch((error) => {
        setUsers([]);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading ...</p>;
  }
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default LastUsersPage;
