import Image from "next/image";
import Link from "next/link";

export default function Music() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-2">
        <Link href="/" className="flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white">
            Go to app
        </Link>
      </div>
        <div>base para artista, canción y album</div>
    </main>
  );
}