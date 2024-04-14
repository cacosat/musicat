"use client";
import Link from "next/link";
import { useState } from 'react';
import SearchBar from "../components/search";
import Image from 'next/image'; // Asegúrate de que está importado

export default function Profile() {
  // Agrega un nuevo estado para rastrear el botón activo
  const [activeTab, setActiveTab] = useState('reseñas');
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex items-center justify-between w-full relative" style={{ padding: '0 15%', height: '350px' }}>
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
        <SearchBar name="barra de búsqueda" />
      </div>

        {/* Otros elementos */}
        <div className="flex items-start justify-start w-1/3 pt-16 z-10">
          <div className="w-56 h-56 rounded-full overflow-hidden relative">
            <Image
              src="/Socias.jpeg"
              alt="Imagen de perfil"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        
        <div className="w-2/3 h-56 flex flex-col items-start justify-between pl-28 pt-16 z-10">
        <h1 className="text-6xl text-white font-semibold mb-4" style={{ fontSize: '68px', lineHeight: '1.2' }}>Ignacio Socías</h1>
          <div className="w-full h-36 bg-white/30 rounded-md border border-gray-300 backdrop-blur-md"></div>
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
  );
}