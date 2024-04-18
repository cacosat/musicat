'use client';

import Link from "next/link";
import SearchOverlay from "./components/searchOverlay";
import SearchProvider from "./components/searchProvider";
import GradientOutline from "./components/gradientOutline";

export default function Home() {

  return (
    <SearchProvider>
      <SearchOverlay searchBar={true}>
          <main className="flex min-h-screen flex-col items-center gap-2 py-28">
            <div className="flex gap-2">
              <Link href="/music" className="flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white">
                  Go to Music
              </Link>
              <Link href="/profile" className="flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-accent-blue-light hover:bg-accent-green-dark">
                  Go to Profile
              </Link>
            </div>


            {/* 
              Este componente, GradientOutline, siempre se tiene que usar envuelto por un div
              que decide el tamaño y puede recibir tres valores: px, py, bg
              1. px: padding horizontal, se debe ingresar el número en string, ej.: '12'
              2. py: padding vertical
              3. bg: se puede ingresar "url('/imagen.jpg')" (tiene que estar el archivo en carpeta public), 
              o se puede ingresar un color (solo acepta colores tailwind o los nuestros, ej.: 'red-500', 'cards')
            */}
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
    </SearchProvider>
  );
}
