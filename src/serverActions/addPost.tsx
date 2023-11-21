"use server";

import { revalidatePath } from "next/cache";

export async function addPost(formData: FormData) {
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
