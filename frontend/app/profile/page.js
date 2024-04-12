"use client";
import Link from "next/link";
import { useState } from 'react';

export default function Profile() {
  // Agrega un nuevo estado para rastrear el botón activo
  const [activeTab, setActiveTab] = useState('reseñas');
  return (
    <main className="flex flex-col min-h-screen w-full">
      {/* Reduce el padding lateral para dar más espacio al contenido */}
      <div className="flex items-center w-full h-72 bg-cards-light" style={{ padding: '0 15%' }}>
        <div className="flex items-center justify-start w-1/3"> {/* Asegúrate de que el círculo esté alineado a la izquierda */}
          <div className="w-56 h-56 bg-background rounded-full"></div>
        </div>
        <div className="w-2/3 h-56 flex flex-col items-start justify-between pl-16"> {/* Añade un padding-left para alinear con el círculo */}
          <h1 className="text-4xl text-white font-bold my-2">Ignacio Socias</h1>
          {/* Aumenta el ancho del rectángulo blurry */}
          <div className="w-full h-full bg-white/30 rounded-md border border-gray-300 my-2 backdrop-blur-md"></div>
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

