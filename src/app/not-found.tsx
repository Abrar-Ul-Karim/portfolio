import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-5xl font-light">404</h1>
      <p className="text-muted">This page could not be found.</p>
      <Link href="/" className="text-accent hover:underline">
        Back to home
      </Link>
    </div>
  );
}
