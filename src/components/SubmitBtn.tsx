"use client";

import { useFormStatus } from "react-dom";

export const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <input
      type="submit"
      disabled={pending}
      value="Submit"
      className="w-1/4 text-xl border rounded p-2 hover:cursor-pointer hover:bg-slate-700 duration-300 disabled:opacity-50 disabled:hover:bg-transparent disabled:cursor-default"
    />
  );
};
