import { Counter } from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-5 text-center">
      <Link className="text-3xl underline block mb-12" href="/posts">
        To Posts
      </Link>
      <Counter />
    </main>
  );
}
