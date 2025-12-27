import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Like = () => {
  const items = [
    "Pokémon Movies",
    "Shinchan Specials",
    "Doraemon Adventures",
    "Ben 10 Ultimate",
    "Chhota Bheem",
  ];

  return (
    <div className="mt-14">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">You Might Like</h2>
        <span className="text-sm text-gray-300 cursor-pointer bg-white/10 px-2 py-1 rounded-sm">See All</span>
      </div>

      <Swiper spaceBetween={20} slidesPerView={4.5} grabCursor>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#1c1c2b] rounded-xl overflow-hidden">

              {/* IMAGE SLOT */}
              <img
                src=""
                alt={item}
                className="w-full h-44 object-cover"
              />

              <div className="p-4 flex justify-between items-center">
                <h3 className="text-sm font-semibold">{item}</h3>
                <i className="ri-bookmark-line text-lg cursor-pointer"></i>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Like;
