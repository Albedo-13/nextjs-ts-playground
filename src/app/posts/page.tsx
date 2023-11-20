import type { TPost, TPosts } from "@/lib/types";
import Link from "next/link";

export default async function PostsPage() {
  const posts: TPosts = await fetch("https://dummyjson.com/posts?limit=5").then((res) => res.json());

  // new Promise((resolve) => setTimeout(() => resolve, 2000));

  const renderListItem = (post: TPost) => {
    return (
      <div role="listitem" key={post.id} className="border mt-5 first:mt-0">
        <div>{post.id}</div>
        <p>{post.title}</p>
      </div>
    );
  };

  return (
    <main className="mt-5 text-center">
      <Link className="text-3xl underline block mb-12" href="/">
        To Main
      </Link>
      <form action="" className="border mx-auto w-2/4 mb-5 flex flex-col items-center gap-3 p-5">
        <input type="text" placeholder="name" className="w-2/4 p-2 text-black" />
        <textarea placeholder="description" className="w-2/4 p-2 text-black" />
        <input type="submit" value="Submit" className="w-1/4 text-xl border rounded p-2 hover:cursor-pointer" />
      </form>
      <div role="list" className="text-2xl mx-auto w-2/4">
        {posts.posts.map((item) => renderListItem(item))}
      </div>
    </main>
  );
}
