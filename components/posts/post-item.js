import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";

function PostItem(props) {
  const { post } = props;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <li className={classes.post}>
      <Link href={`/posts/${post.slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={post.title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{post.title}</h3>
            <time>{formattedDate}</time>
            <p>{post.excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
