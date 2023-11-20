import Link from "next/link";

export default function PostsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <Link className="text-3xl underline" href="/">
        To Main
      </Link>
      <div role="list" className="text-2xl">
        <div role="listitem">test</div>
        <div role="listitem">test</div>
        <div role="listitem">test</div>
      </div>
    </main>
  );
}
