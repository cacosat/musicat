"use client";
import Link from "next/link";
import { useState } from 'react';

export default function Profile() {
  // Agrega un nuevo estado para rastrear el botón activo
  const [activeTab, setActiveTab] = useState('reseñas');

  return (
  <main className="flex flex-col min-h-screen w-full">
        {/* Banner como un rectángulo que abarca todo el ancho superior */}
        <div className="w-full h-64 bg-cards-light flex items-center justify-center">
          {/* Puedes agregar una imagen o texto dentro de este div */}
          <p className="text-2xl text-white font-bold">Bienvenido a Mi Aplicación</p>
        </div>

       {/* Contenedor para los botones */}
       <div className="w-full h-8 flex justify-center bg-lefter">
          {/* Envoltorio de botones con ancho máximo y centrado */}
          <div className="flex" style={{ maxWidth: '600px' }}>
          <button 
              onClick={() => setActiveTab('reseñas')}
              className={`w-1/3 h-full text-center text-white font-medium focus:outline-none ${activeTab === 'reseñas' ? 'bg-background' : 'bg-lefter'} px-10`}
            >
                Reseñas
            </button>
            <button 
              onClick={() => setActiveTab('ratings')}
              className={`w-1/3 h-full text-center text-white font-medium focus:outline-none ${activeTab === 'ratings' ? 'bg-background' : 'bg-lefter'} px-10`}
            >
                Ratings
            </button>
            <button 
              onClick={() => setActiveTab('guardado')}
              className={`w-1/3 h-full text-center text-white font-medium focus:outline-none ${activeTab === 'guardado' ? 'bg-background' : 'bg-lefter'} px-10`}
            >
                Guardado
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <div className="flex gap-2">
            <Link href="/" className="flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Ir a la aplicación
            </Link>
          </div>
        </div>
      </main>
  );
}