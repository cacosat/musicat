'use client';

import Link from "next/link";
import SearchOverlay from "./components/searchOverlay";
import Card from "./components/reviewCard";
import Ratings from "./components/Ratings";
import MusicCard from "./components/musicCard";
import ListHeader from "./components/listHeader";

export default function Home() {

  return (
      <SearchOverlay searchBar={true}>
        <main className="w-full flex flex-col items-center  ">
          <div className=" py-8">
            <Card />
          </div>
          <div className="w-full flex flex-col gap-8 text-start py-8">
            <p className=" font-semibold text-[32px] text-white">Recommended</p>
            {/* Following should be small card component */}
            <div className="flex gap-4 h-56">
              <MusicCard type='song' />
              <MusicCard type='artist' />
              <MusicCard type='album' />
            </div>       
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
