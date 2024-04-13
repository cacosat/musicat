"use client";
import Link from "next/link";
import { useState } from 'react';
import SearchBar from "../components/search";

export default function Profile() {
  // Agrega un nuevo estado para rastrear el botón activo
  const [activeTab, setActiveTab] = useState('reseñas');
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex items-center justify-between w-full bg-cards-light" style={{ padding: '0 15%', height: '350px' }}>
        {/* SearchBar debe permanecer en la parte superior */}
        <div className="absolute inset-x-0 top-0 mx-auto my-8 flex justify-center z-10">
        <SearchBar name="barra de búsqueda" className="w-full" />
        </div>

        {/* Asegúrate de que el círculo esté alineado a la izquierda y agregue margen en la parte superior para el título */}
        <div className="flex items-start justify-start w-1/3 pt-20"> {/* Agrega padding-top para bajar el título */}
          <div className="w-56 h-56 bg-background rounded-full"></div>
        </div>
        
        {/* Añade un padding-left para alinear con el círculo y margen en la parte superior para el título */}
        <div className="w-2/3 h-56 flex flex-col items-start justify-between pl-16 pt-20"> {/* Aumenta padding-top para el espacio del título */}
          <h1 className="text-4xl text-white font-bold mb-4">Ignacio Socias</h1> {/* Agrega margen inferior al título si es necesario */}
          <div className="w-full h-24 bg-white/30 rounded-md border border-gray-300 backdrop-blur-md"></div> {/* Ajusta la altura de este elemento según sea necesario */}
        </div>
      </div> 
      
       {/* Contenedor para los botones */}
       <div className="w-full h-8 flex justify-center bg-lefter">
          {/* Envoltorio de botones con ancho máximo y centrado */}
        <div className="flex" style={{ maxWidth: '600px' }}>
          <button 
            onClick={() => setActiveTab('reseñas')}
            className={`w-1/3 h-full text-center ${activeTab === 'reseñas' ? 'text-white font-semibold bg-background' : 'text-custom-gray-200 font-light bg-lefter'} px-10 focus:outline-none`}
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

