import React from "react";
import fs from "fs/promises";
import path from "path";

function ProductDetailPage(props) {
  const { product } = props;
  //   if (!product) {
  //     return (
  //       <React.Fragment>
  //         <p>Loading...</p>
  //       </React.Fragment>
  //     );
  //   }
  return (
    <React.Fragment>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </React.Fragment>
  );
}

async function getData() {
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  // process.cwd() return the project root directory. Not the page directory
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          pid: "p1",
        },
      },
    ],
    fallback: "blocking",
  };
}

export default ProductDetailPage;
