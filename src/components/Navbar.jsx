import React from 'react';
import { CiSearch } from 'react-icons/ci';

function Navbar() {
  return (
    <div className="max-w-[1240px] mx-auto p-4 h-20 flex justify-between items-center">
      <div className=" font-bold text-red-600 cursor-pointer hover:text-red-500 flex ">
        <img
          src="https://logodix.com/logo/69209.png"
          className=" w-[60px] md:w-[120px] lg:w-[150px] md:mt-2"
          alt=""
        />
      </div>
      <div className="flex gap-x-7">
        <div className="flex ">
          <input
            type="text"
            placeholder="  Search"
            className=" w-[170px] md:w-[390px]  md:h-12 md:p-1 rounded border border-gray-200 hover:border-gray-300 hover:bg-gray-800 opacity-80 duration-75"
          />
          <CiSearch className="text-3xl mt-1 md:mt-3 text-white" />
        </div>

        <button className="w-[55px] text-sm md:text-xl bg-red-700 rounded text-white font-semibold md:px-2 md:py-1 md:w-[110px] ">
          Signin
        </button>
      </div>
    </div>
  );
}

export default Navbar;
