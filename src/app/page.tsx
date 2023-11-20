import { Counter } from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <Link className="text-3xl underline" href="/posts">
        To Posts
      </Link>
      <Counter />
    </main>
  );
}
