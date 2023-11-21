import { revalidatePath } from "next/cache";
import Link from "next/link";
import { SubmitBtn } from "@/components/SubmitBtn";
import type { TPost } from "@/lib/types";

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

  async function create(formData: FormData) {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 2000));

    fetch("http://localhost:3002/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.get("title") as string,
        body: formData.get("body") as string,
        userId: 1,
        tags: [],
        reactions: 0,
      }),
    });

    revalidatePath("/posts");
  }

  // TODO: submit new post to collection
  // TODO: test random limit refresh on build
  // TS: https://www.youtube.com/watch?v=TPACABQTHvM&ab_channel=ByteGrad
  // Next.js: https://www.youtube.com/watch?v=vwSlYG7hFk0&ab_channel=ByteGrad

  return (
    <main className="mt-5 text-center">
      <Link className="text-3xl underline block mb-12" href="/">
        To Main
      </Link>
      <form action={create} className="mx-auto w-2/4 mb-5 flex flex-col items-center gap-3 p-5">
        <input
          type="text"
          name="title"
          placeholder="name"
          required
          className="w-2/4 p-2 bg-transparent border rounded"
        />
        <textarea name="body" placeholder="description" required className="w-2/4 p-2 bg-transparent border rounded" />
        <SubmitBtn />
      </form>
      <ul className="text-2xl mx-auto w-2/4">{posts.map((item) => renderListItem(item))}</ul>
    </main>
  );
}
