import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-6">
      <h2 className="text-4xl font-serif italic text-pink-400">Youre lost in the clouds...</h2>
      <p className="text-white/60">This page doesnt exist, but our friendship definitely does.</p>
      <Link href="/" className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
        Go Back Home
      </Link>
    </div>
  );
}