"use client";
import Image from 'next/image';

export default function Profile() {
  const bannerTestImg = "/Coldplay.jpeg";
  const userName = 'Coldplay';

  return (
    <main className="flex flex-col w-full h-full">
      <div className="flex items-center justify-center w-full relative" style={{ height: '80vh' }}>
        {/* Imagen de fondo para el banner */}
        <Image
          src={bannerTestImg} // Asegúrate de cambiar la ruta a la imagen que desees usar
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="z-0" // Mantiene la imagen en el fondo
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 z-10" />
        {/* Div de degradado */}
        <div className="flex justify-center items-center w-full max-w-[1000px] z-20">
          {/* Contenedor para alinear el contenido */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
            {userName}
          </h1>
        </div>
      </div>
    </main>
  );
}
