export async function getAllUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

export async function getAllUsersWhoWorkWithLLC() {
  const response = await getAllUsers();
  const result = response.filter((user) => {
    if (user.company.name.includes("LLC")) {
      return true;
    }
    return false;
  });
  return result;
}

export async function getUserDetail(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await response.json();
  return data;
}
