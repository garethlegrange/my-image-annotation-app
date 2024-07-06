import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Home page</h1>
      <p>Could be login page</p>
      <Link href="/images">Go to app</Link>
    </main>
  );
}
