import Head from "next/head";
import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming relates posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
