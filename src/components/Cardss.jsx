import React from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { FaHandshakeAngle } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { BsFillLaptopFill } from 'react-icons/bs';

function Cardss() {
  return (
    <>
      <div className="max-w-[1240px] ml-[20px] md:ml-[150px] mx-auto mt-2  text-white font-bold text-2xl">
        More reasons to join
      </div>
      <div className="max-w-[1240px] mx-auto  p-4 md:grid grid-cols-4 gap-4">
        <div className="text-white bg-gray-900 border-none rounded-[15px]  shadow-xl font-bold hover:scale-90 duration-[400ms]  border border-white h-[270px] ">
          <h1 className="text-3xl mt-4 ml-3  ">
            Stories tailored <br /> to your taste
            <FaHandHoldingHeart className="mt-28 ml-56 text-pink-800" />
          </h1>
        </div>
        <div className="text-white bg-gray-900 border-none rounded-[15px]  shadow-xl font-bold hover:scale-90 duration-[400ms] border border-white  h-[270px] ">
          <h1 className="text-3xl mt-4 ml-3  ">
            Cancel or switch <br /> plans anytime
            <FaHandshakeAngle className="mt-28 ml-56 text-red-600" />
          </h1>
        </div>
        <div className="text-white  bg-gray-900  border-none rounded-[15px] shadow-xl font-bold hover:scale-90 duration-[400ms]  border border-white h-[270px] ">
          <h1 className="text-3xl mt-4 ml-3  ">
            A place just for <br /> kids
            <FaHeart className="mt-28 ml-56 text-red-600" />
          </h1>
        </div>
        <div className="text-white  bg-gray-900 border-none rounded-[15px] shadow-xl font-bold hover:scale-90 duration-[400ms]  border border-white h-[270px] ">
          <h1 className="text-3xl mt-4 ml-3  ">
            For your phone, <br /> tablet, laptop, <br /> and TV
            <BsFillLaptopFill className="mt-20 ml-56 text-gray-400 " />
          </h1>
        </div>
      </div>
    </>
  );
}

export default Cardss;
