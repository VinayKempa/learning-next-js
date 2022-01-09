import { useRouter } from "next/router";
import Link from "next/link";

const ClientsPage = () => {
  const router = useRouter();

  const clients = [
    {
      id: "vinay",
      name: "Vinay",
    },
    {
      id: "kempa",
      name: "Kempa",
    },
    {
      id: "meghana",
      name: "Meghana",
    },
  ];
  return (
    <div>
      <h1>The Clients page</h1>
      <ul>
        {(clients || []).map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
