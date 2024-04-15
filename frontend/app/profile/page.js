"use client";
import Link from "next/link";
import { useState } from 'react';
import SearchBar from "../components/searchBox";
import SearchProvider from "../components/searchProvider";
import SearchOverlay from "../components/searchOverlay";
import Image from 'next/image'; // Asegúrate de que está importado

export default function Profile() {
  // Agrega un nuevo estado para rastrear el botón activo
  const [activeTab, setActiveTab] = useState('reseñas');
  return (
    <SearchProvider>
      <SearchOverlay>
        <main className="flex flex-col min-h-screen w-full">
          <div className="flex items-center justify-center w-full relative" style={{ paddingTop: '6%', paddingRight: '10%', paddingBottom: '2%', paddingLeft: '10%', height: '350px' }}>
            {/* Imagen de fondo para el rectángulo azul */}
            <Image
              src="/Santiago.jpeg" // Asegúrate de cambiar la ruta a la imagen que desees usar
              alt="Fondo azul"
              layout="fill"
              objectFit="cover"
              className="z-0" // Mantiene la imagen en el fondo
            />
        
            {/* Div de degradado */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80 z-5"></div>
            {/* SearchBar debe permanecer en la parte superior */}
            <div className="absolute inset-x-0 top-0 mx-auto my-8 px-4 w-full flex justify-center z-10">
            {/* Pasa la prop fullWidth con el valor true */}
            <SearchBar placeholder="Barra de búsqueda" />
          </div>
             {/* Nuevo contenedor para alinear la imagen de perfil a la izquierda y el nombre y rectángulo a la derecha */}
             <div className="flex items-end justify-between w-full mx-auto gap-x-36 z-10 h-full">
          {/* Contenedor para la imagen circular de perfil */}
          <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"> {/* Agrega un margin-bottom que sea el padding deseado */}
        <div className="relative pt-[100%] overflow-hidden rounded-full">
          {/* Imagen de perfil */}
          <Image
            src="/Socias.jpeg"
            alt="Imagen de perfil"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
          />
        </div>
          </div>
        
          {/* Contenedor para el nombre y rectángulo borroso, alineados a la derecha */}
          <div className="flex-1 flex flex-col justify-end h-full">
        {/* Nombre del usuario */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 mt-8">Ignacio Socías</h1>
        
        {/* Rectángulo borroso */}
        <div className="bg-white/30 rounded-md border border-gray-300 backdrop-blur-md py-8 w-full h-full">
        </div>
          </div>
        </div>
        </div>
        
          {/* Contenedor para los botones */}
          <div className="w-full h-8 flex justify-center bg-lefter">
            <div className="flex" style={{ maxWidth: '600px' }}>
              <button
                onClick={() => setActiveTab('reseñas')}
                className={`w-fit h-full text-center ${activeTab === 'reseñas' ? 'text-white font-semibold bg-background' : 'text-custom-gray-200 font-light bg-lefter'} px-10 focus:outline-none`}
              >
                Reseñas
              </button>
              <button
                onClick={() => setActiveTab('ratings')}
                className={`w-1/3 h-full text-center ${activeTab === 'ratings' ? 'text-white font-semibold bg-background' : 'text-custom-gray-200 font-light bg-lefter'} px-10 focus:outline-none`}
              >
                Ratings
              </button>
              <button
                onClick={() => setActiveTab('guardado')}
                className={`w-1/3 h-full text-center ${activeTab === 'guardado' ? 'text-white font-semibold bg-background' : 'text-custom-gray-200 font-light bg-lefter'} px-10 focus:outline-none`}
              >
                Guardado
              </button>
            </div>
          </div>
        </main>
      </SearchOverlay>
    </SearchProvider>
  );
}