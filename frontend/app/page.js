'use client';

import Link from "next/link";
import SearchOverlay from "./components/searchOverlay";
import SearchProvider from "./components/searchProvider";

export default function Home() {

  return (
    <SearchProvider>
      <SearchOverlay>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex gap-2">
              <Link href="/music" className="flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white">
                  Go to Music
              </Link>
              <Link href="/profile" className="flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-accent-blue-light hover:bg-accent-green-dark">
                  Go to Profile
              </Link>
            </div>
          </main>
      </SearchOverlay>
    </SearchProvider>
  );
}
