import fs from "fs/promises";
import Link from "next/link";
import path from "path";

function Home(props) {
  const { products } = props;
  return (
    <ul>
      {(products || []).map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

// Before Load
export async function getStaticProps() {
  try {
    // process.cwd() return the project root directory. Not the page directory
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    if (!data) {
      return {
        redirect: {
          destination: "/no-data",
        },
      };
    }

    if (data.products.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        products: data.products,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
      redirect: {
        destination: "/error-page",
      },
    };
  }
}

export default Home;
