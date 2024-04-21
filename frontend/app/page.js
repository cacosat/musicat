'use client';

import Link from "next/link";
import SearchOverlay from "./components/searchOverlay";
import SearchProvider from "./components/searchProvider";
import GradientOutline from "./components/gradientOutline";

export default function Home() {

  return (
      <SearchOverlay searchBar={true}>
        <main className="flex min-h-screen flex-col items-center gap-2 py-8">
          <div className="flex gap-2">
            <Link href="/music" className="flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white">
                Go to Music
            </Link>
            <Link href="/profile" className="flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-accent-blue-light hover:bg-accent-green-dark">
                Go to Profile
            </Link>
          </div>

          <div className="w-[80%] h-56">
            <GradientOutline bg="url('/Santiago.jpeg')" px='16' py='16'>
              <div className="w-fit h-fit text-white">
                <GradientOutline bg="lefter">
                  paddfkjalskj
                </GradientOutline>
              </div>
            </GradientOutline>
          </div>       
        </main>
      </SearchOverlay>
  );
}
