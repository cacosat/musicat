import Image from "next/image";
import Link from "next/link";

export default function Music() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-2">
        <Link href="/" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Go to app
        </Link>
      </div>
        <div>base para artista, canción y album</div>
    </main>
  );
}