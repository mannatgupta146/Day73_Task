import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";

const Continue = () => {
  const items = [
    { title: "Shinchan", img: c1 },
    { title: "Doraemon", img: c2 },
    { title: "Ben 10", img: c3 },
    { title: "Pokémon", img: c4 },
    { title: "Ninja Hattori", img: c5 },
  ];

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Continue Watching</h2>
        <span className="text-sm text-gray-300 cursor-pointer bg-white/10 px-2 py-1 rounded-sm">
          See All
        </span>
      </div>

      <Swiper spaceBetween={20} slidesPerView={3.5} grabCursor>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#1c1c2b] rounded-xl overflow-hidden">

              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-44 object-cover object-top"
              />

              <div className="p-4">
                <h3 className="font-semibold mb-3">{item.title}</h3>
                <p className="text-xs text-gray-400">S1 · Ep 3 · 25min</p>

                <div className="w-full h-1 bg-gray-600 rounded-full mt-3">
                  <div className="w-1/2 h-full bg-purple-500 rounded-full"></div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Continue;
