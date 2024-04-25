'use client';

import Link from "next/link";
import SearchOverlay from "./components/searchOverlay";
import SearchProvider from "./components/searchProvider";
import GradientOutline from "./components/gradientOutline";
import Card from "./components/reviewCard";
import Ratings from "./components/Ratings";

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
            <div className=" h-56">
              <GradientOutline bg="url('/Santiago.jpeg')" px='16' py='16'>
                <div className="w-fit h-fit text-white">
                  <GradientOutline bg="lefter">
                    paddfkjalskj
                  </GradientOutline>
                </div>
              </GradientOutline>
            </div>       
          </div>
          <div className="w-full flex flex-col gap-4 text-start py-8">
            <p className=" font-semibold text-[32px] text-white">Top 10 / Trends</p>
            {/* Following should be small card component */}
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
