import React from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPost } from "../lib/posts-util";
function HomePage(props) {
  return (
    <React.Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const posts = getFeaturedPost();
  return {
    props: {
      posts: posts,
    },
    revalidate: 60,
  };
}

export default HomePage;

// 1 -> Hero - Present ourself
// 2 -> Featured posts

/*
export const DUMMY_POSTS = [
  {
    slug: "getting-started-with-next-js",
    title: "Getting started with NextJs",
    image: "getting-started-with-next-js.png",
    date: new Date().toDateString(),
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    slug: "getting-started-with-next-js-2",
    title: "Getting started with NextJs 2",
    image: "getting-started-with-next-js.png",
    date: new Date().toDateString(),
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    slug: "getting-started-with-next-js-3",
    title: "Getting started with NextJs 3",
    image: "getting-started-with-next-js.png",
    date: new Date().toDateString(),
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
*/
