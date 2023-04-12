import { PostResponse } from "@/types";

/**
 * Sample component for rendering a list of posts
 *
 * @see https://beta.nextjs.org/docs/configuring/static-export#server-components
 * @returns
 */
export default async function Page() {
  // This fetch will run on the server during `next build`
  const res = await fetch("https://dummyjson.com/posts");
  const data: PostResponse = await res.json();
  const posts = data.posts;

  return (
    <main>
      {posts.map((post) => (
        <div key={post.id} id={post.id.toString()}>
          {/* Title */}
          <h3 id="title">{post.title}</h3>

          {/* Body */}
          <p id="body">{post.body}</p>

          {/* Username */}
          <p id="username">User {post.userId}</p>

          {/* Tags */}
          <ul id="tags">
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          {/* Reactions */}
          <p id="reactions">{post.reactions}</p>
        </div>
      ))}
    </main>
  );
}