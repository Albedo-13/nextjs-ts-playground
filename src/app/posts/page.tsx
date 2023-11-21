import Link from "next/link";
import type { TPost } from "@/lib/types";
import { AddPostForm } from "@/components/AddPostForm";

type Inputs = {
  example: string
  exampleRequired: string
}

export default async function PostsPage() {
  const posts: TPost[] = await fetch("http://localhost:3002/posts").then((res) => res.json());

  const renderListItem = (post: TPost) => {
    return (
      <li key={post.id} className="border mt-5 first:mt-0">
        <div>{post.id}</div>
        <p>{post.title}</p>
        <p className="m-2">{post.body}</p>
      </li>
    );
  };

  // TS: https://www.youtube.com/watch?v=TPACABQTHvM&ab_channel=ByteGrad
  // Next.js: https://www.youtube.com/watch?v=vwSlYG7hFk0&ab_channel=ByteGrad

  return (
    <main className="mt-5 text-center">
      <Link className="text-3xl underline block mb-12" href="/">
        To Main
      </Link>
      <AddPostForm />
      <ul className="text-2xl mx-auto w-2/4">{posts.map((item) => renderListItem(item))}</ul>
    </main>
  );
}
