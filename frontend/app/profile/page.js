"use client";
import Link from "next/link";
import { useContext, useState } from 'react';
import SearchBar from "../components/searchBox";
import SearchProvider from "../components/searchProvider";
import SearchOverlay from "../components/searchOverlay";
import Image from 'next/image'; 
import Card from '../components/Card';
import AboutCard from "../components/aboutCard";
import Ratings from '../components/Ratings';
import { SearchQueryContext } from "../context";

export default function Profile() {
  // Agrega un nuevo estado para rastrear el botón activo
  const [activeTab, setActiveTab] = useState('reseñas');
  const {showSearchResult} = useContext(SearchQueryContext);
  const bannerTestImg = "/Santiago.jpeg"
  const userName = 'Ignacio Socías'
  const aboutCardDescription = 'Siempre me ha gustado especialmente el rock, fanatico de la banda chilena... humorista, Santiago de Chile.'

  const searchBarVisible = () => {
    // console.log(showSearchResult)
    // showSearchResult ? true : false;
    // TODO function that returns true when searchbar should be visible to feed it into SearchOverlay
  }
  
  function activeTabContent(activeTab) {
    if (activeTab === 'reseñas') {
      return <>
        <div className="w-full h-full flex flex-col items-center gap-8 py-8 px-4">
          <div className="max-w-[900px] flex flex-col items-center justify-center overflow-hidden shadow-custom-vertical ">
            <Card />
          </div>
          <div className="max-w-[900px] h-fit flex flex-col items-center justify-center overflow-hidden shadow-custom-vertical ">
            <Card />
          </div>
          <div className="max-w-[900px] h-fit flex flex-col items-center justify-center overflow-hidden shadow-custom-vertical ">
            <Card />
          </div>
          <div className="max-w-[900px] h-fit flex flex-col items-center justify-center overflow-hidden shadow-custom-vertical ">
            <Card />
          </div>
          <div className="max-w-[900px] h-fit flex flex-col items-center justify-center overflow-hidden shadow-custom-vertical ">
            <Card />
          </div>
        </div>
      </>
    } else if (activeTab === 'ratings') {
      return <>
        <div className="w-full h-full flex flex-col items-center gap-8 py-8 px-4">
          <div className="max-w-[900px] flex flex-col items-center justify-center overflow-hidden shadow-custom-vertical">
            <Ratings />
          </div>
        </div>
      </>;

    } else if (activeTab === 'guardado') {
      return <>
        <div className="w-full h-full flex justify-center text-white ">
          Guardado
        </div>
      </>
    }
  }

  return (
    <SearchOverlay searchBar={!searchBarVisible}>
      <main className="flex flex-col w-full overflow-x-hidden">
        <div className="flex items-center justify-center w-full relative p-12">
          {/* Imagen de fondo para el rectángulo azul */}
          <Image
            src={bannerTestImg} // Asegúrate de cambiar la ruta a la imagen que desees usar
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="z-0" // Mantiene la imagen en el fondo
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 z-5">
            {/* Div de degradado */}
          </div>

          <div className="flex justify-center items-center w-full max-w-[1000px] overflow-hidden gap-24 z-10 h-full">
          {/* Nuevo contenedor para alinear la imagen de perfil a la izquierda y el nombre y rectángulo a la derecha */}
            <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"> {/* Agrega un margin-bottom que sea el padding deseado */}
            {/* Contenedor para la imagen circular de perfil */}
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
      
            <div className="flex flex-col justify-center h-full gap-4">
            {/* Contenedor para el nombre y rectángulo borroso, alineados a la derecha */}
              {/* Nombre del usuario */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold ">
                {userName}
              </h1>
              {/* Rectángulo borroso */}
              <AboutCard description={aboutCardDescription} />
            </div>
          </div>
        </div>
      
        {/* Contenedor para los tabs */}
        <div className="w-full h-12 flex justify-center bg-lefter">
          <div className="sticky top-0 flex">
            <button
              onClick={() => setActiveTab('reseñas')}
              className={`w-fit h-full text-center ${activeTab === 'reseñas' ? 'text-white font-semibold bg-background' : 'text-custom-gray-200 font-light bg-lefter'} px-10 focus:outline-none`}
            >
              Reseñas
            </button>
            <button
              onClick={() => setActiveTab('ratings')}
              className={`w-fit h-full text-center ${activeTab === 'ratings' ? 'text-white font-semibold bg-background' : 'text-custom-gray-200 font-light bg-lefter'} px-10 focus:outline-none`}
            >
              Ratings
            </button>
            <button
              onClick={() => setActiveTab('guardado')}
              className={`w-fit h-full text-center ${activeTab === 'guardado' ? 'text-white font-semibold bg-background' : 'text-custom-gray-200 font-light bg-lefter'} px-10 focus:outline-none`}
            >
              Guardado
            </button>
          </div>
        </div>

        <div>
          {activeTabContent(activeTab)}
        </div>
        
      </main>
    </SearchOverlay>

  );
}


