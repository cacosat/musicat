'use client';

import { useContext } from "react";
import Link from "next/link";
import SearchOverlay from "./components/searchOverlay";
import Card from "./components/reviewCard";
import Ratings from "./components/Ratings";
import MusicCard from "./components/musicCard";
import ListHeader from "./components/listHeader";
import Carrousel from "./components/carrousel";
import MusicCardSmall from "./components/musicCardSmall";
import { SearchQueryContext } from "./context";

export default function Home() {
  const {showSearchResults} = useContext(SearchQueryContext);

  return (
      <SearchOverlay searchBar={true}>
        <main className="w-full flex flex-col items-center overflow-hidden">
          <div className=" flex flex-col gap-8 text-start py-8">
            <p className=" font-semibold text-[32px] text-white">Daily Highlights (top 5)</p>
            {/* TODO: presentación chora para un top 5 que vaya ciclando con el tiempo, referencia: netflix top 10 */}
            <Card />
          </div>
          <div className="w-full flex flex-col gap-8 text-start py-8">
            <p className=" font-semibold text-[32px] text-white">Recommended</p>
            {/* scroll div */}
            <Carrousel>
              <MusicCard type='artist' />
              <MusicCard type='album' />
              <MusicCard type='song' />
              <MusicCard type='artist' />
              <MusicCard type='album' />
              <MusicCard type='song' />
            </Carrousel>
          </div>
          <div className="w-full flex flex-col gap-4 text-start py-8">
            <p className=" font-semibold text-[32px] text-white">Top 10 / Trends</p>
              <ListHeader />
              <Ratings />
              <Ratings />
              <Ratings />
              <Ratings />
              <Ratings />
              <Ratings />
              <Ratings />
              <Ratings />
              <Ratings />
              <Ratings />
          </div>

        </main>
      </SearchOverlay>
  );
}
