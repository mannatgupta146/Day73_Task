import React from "react";
import userimg from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-3">
      
      {/* 🔍 Search Bar */}
      <div className="relative w-1/3">
        <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
        <input
          type="text"
          placeholder="Search for films, directors, or actors..."
          className="w-full bg-[#1c1c2b] text-sm text-white placeholder-gray-400 pl-11 pr-4 py-2.5 rounded-xl border border-[#453f55] focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* 🔔 Right Icons */}
      <div className="flex items-center gap-6">
        <i className="ri-notification-2-line text-2xl text-white cursor-pointer"></i>
        <img
          src={userimg}
          alt="user"
          className="h-10 w-10 rounded-full object-cover cursor-pointer"
        />
      </div>

    </div>
  );
};

export default Navbar;
