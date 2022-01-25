import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMakdown from "react-markdown";

function PostContent(props) {
  const { title, image, content, slug } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMakdown>{content}</ReactMakdown>
    </article>
  );
}

export default PostContent;
