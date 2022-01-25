import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // Removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  allPosts.sort((postA, postB) => {
    if (postA.date > postB.data) {
      return -1;
    } else if (postA.date < postB.data) {
      return 1;
    } else {
      return 0;
    }
  });
  return allPosts;
}

export function getFeaturedPost() {
  const allPosts = getAllPosts();
  const filtered = allPosts.filter((post) => post.isFeatured);
  return filtered;
}

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}
