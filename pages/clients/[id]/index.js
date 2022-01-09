import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    // Load data ...
    router.push("/clients/vinay/projectA");
  };
  return (
    <div>
      <h1>The Projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
