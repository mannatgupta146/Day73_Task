import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";
import l4 from "../assets/l4.png";
import l5 from "../assets/l5.png";

const Like = () => {
  const items = [
    { title: "Pokémon Movies", img: l1 },
    { title: "Shinchan Specials", img: l2 },
    { title: "Doraemon Adventures", img: l3 },
    { title: "Ben 10 Ultimate", img: l4 },
    { title: "Chhota Bheem", img: l5 },
  ];

  return (
    <div className="mt-14">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">You Might Like</h2>
        <span className="text-sm text-gray-300 cursor-pointer bg-white/10 px-2 py-1 rounded-sm">
          See All
        </span>
      </div>

      <Swiper spaceBetween={20} slidesPerView={4.5} grabCursor>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#1c1c2b] rounded-xl overflow-hidden">

              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-60 h-64 object-cover object-top"
              />

              <div className="p-4 flex justify-between items-center">
                <h3 className="text-sm font-semibold">{item.title}</h3>
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
