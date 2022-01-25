import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
  const { post } = props;
  return <PostContent post={post} />;
}

export async function getStaticProps(context) {
  const { params } = context;
  const postSlug = params.slug;
  const post = getPostData(postSlug);
  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths(context) {
  const fileNames = getPostFiles();
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
