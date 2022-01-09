import { useRouter } from "next/router";
const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Selected Project Page of a given Client</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
