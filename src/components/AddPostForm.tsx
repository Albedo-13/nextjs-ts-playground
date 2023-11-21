"use client";

import React, { useRef } from "react";
import { SubmitBtn } from "@/components/SubmitBtn";
import { addPost } from "@/serverActions/addPost";

export const AddPostForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  const createNewPost = async (formData: FormData) => {
    await addPost(formData);
    ref.current?.reset();
  };

  return (
    <form ref={ref} action={createNewPost} className="mx-auto w-2/4 mb-5 flex flex-col items-center gap-3 p-5">
      <input type="text" name="title" placeholder="name" required className="w-2/4 p-2 bg-transparent border rounded" />
      <textarea name="body" placeholder="description" required className="w-2/4 p-2 bg-transparent border rounded" />
      <SubmitBtn />
    </form>
  );
};
