function Home(props) {
  const { products } = props;
  return (
    <ul>
      {(products || []).map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </ul>
  );
}

// Before Load
export async function getStaticProps() {
  return {
    props: {
      products: [
        {
          id: "p1",
          title: "Product 1",
        },
        {
          id: "p2",
          title: "Product 2",
        },
      ],
    },
  };
}

export default Home;
