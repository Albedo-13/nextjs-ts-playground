import Link from "next/link";
import type { TPost } from "@/lib/types";

export default async function Post() {
  const post: TPost = await fetch("http://localhost:3002/posts/1").then((res) => res.json());

  return (
    <main className="mt-5 text-center">
      <Link className="text-3xl underline block mb-12" href="/posts">
        To All Posts
      </Link>
      <p>{post.id}</p>
      <p>{post.body}</p>
    </main>
  );
}
