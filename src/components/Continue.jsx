import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Continue = () => {
  const items = ["Shinchan", "Doraemon", "Ben 10", "Pokémon", "Ninja Hattori"];

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Continue Watching</h2>
        <span className="text-sm text-gray-300 cursor-pointer bg-white/10 px-2 py-1 rounded-sm">See All</span>
      </div>

      <Swiper spaceBetween={20} slidesPerView={3.5} grabCursor>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#1c1c2b] rounded-xl overflow-hidden">

              {/* IMAGE SLOT */}
              <img
                src=""
                alt={item}
                className="w-full h-36 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold mb-3">{item}</h3>
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
