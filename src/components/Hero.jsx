import React from "react";
import heroimg from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] rounded-2xl border-2 overflow-hidden mt-6">

      {/* 🔥 BACKGROUND IMAGE (ADD YOUR IMAGE HERE) */}
      <img
        src={heroimg}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* overlay */}
      <div className="absolute inset-0 "></div>

      {/* content */}
      <div className="relative z-10 h-full flex items-end p-10">
        <div className="max-w-xl">

          <span className="inline-flex px-3 py-1 text-xs  bg-white/20 rounded-full mb-4">
            🔥 Now Trending
          </span>

          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-xs bg-white/20 rounded-full">Drama</span>
            <span className="px-3 py-1 text-xs bg-white/20 rounded-full">Fantasy</span>
          </div>

          <h1 className="text-4xl font-bold mb-3">
            Pokémon & Friends on an Adventure
          </h1>

          <p className="text-gray-300 text-sm mb-6">
            When curious kids discover a hidden world, everything changes.
          </p>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-purple-500 rounded-full">
              ▶ Watch Now
            </button>
            <button className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ri-download-line"></i>
            </button>
            <button className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ri-more-2-fill"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
