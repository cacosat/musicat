import Image from "next/image";
import Link from "next/link";
import SearchBar from "./components/search";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute inset-x-0 top-0 my-8 ml-[180px] flex justify-center">
        <SearchBar name='Barra de búsqueda'></SearchBar>
      </div>
      <div className="flex gap-2">
        <Link href="/music" className="flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white">
            Go to Music
        </Link>
        <Link href="/profile" className="flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-accent-blue-light hover:bg-accent-green-dark">
            Go to Profile
        </Link>
      </div>
    </main>
  );
}
