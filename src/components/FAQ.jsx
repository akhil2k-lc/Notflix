import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function FAQ() {
  return (
    <>
      <div className="max-w-[1240px] mx-auto text-white  h-20 p-4  md:grid grid-cols-3">
        <div className="col-span-3 text-2xl font-bold hover:text-3xl  duration-[600ms] ">
          Frequently Asked Questions
        </div>
      </div>
      <div className="max-w-[1240px]  mx-auto mt-2 justify-center items-center text-white  bg-gray-900 hover:bg-gray-800 duration-[600ms] shadow-xl h-20 p-4 md:grid grid-cols-3">
        <div className="col-span-2 text-2xl   ">What is Netfilx?</div>
        <div className="  col-span-1 ml-80">
          <FaPlus />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto mt-2 justify-center items-center text-white  bg-gray-900 hover:bg-gray-800 duration-[600ms] shadow-xl h-20 p-4  md:grid grid-cols-3">
        <div className="col-span-2 text-2xl     ">
          How much does Netflix cost?
        </div>
        <div className=" col-span-1 ml-80">
          <FaPlus />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto mt-2 justify-center items-center text-white  bg-gray-900 hover:bg-gray-800 duration-[600ms] shadow-xl h-20 p-4  md:grid grid-cols-3">
        <div className="col-span-2 text-2xl  ">Where can I watch?</div>
        <div className="col-span-1 ml-80">
          <FaPlus />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto mt-2 justify-center items-center text-white  bg-gray-900 hover:bg-gray-800 duration-[600ms] shadow-xl h-20 p-4  md:grid grid-cols-3">
        <div className="col-span-2 text-2xl    ">How do I cancel? </div>
        <div className=" col-span-1 ml-80">
          <FaPlus />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto mt-2 justify-center items-center text-white  bg-gray-900 hover:bg-gray-800 duration-[600ms] shadow-xl h-20 p-4  md:grid grid-cols-3">
        <div className="col-span-2 text-2xl    ">
          What can I watch on Netflix?{' '}
        </div>
        <div className=" col-span-1 ml-80">
          <FaPlus />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto mt-2 justify-center items-center text-white  bg-gray-900 hover:bg-gray-800 duration-[600ms] shadow-xl h-20 p-4  md:grid grid-cols-3">
        <div className="col-span-2 text-2xl    ">
          Is Netflix is good for kids?{' '}
        </div>
        <div className=" col-span-1 ml-80">
          <FaPlus />
        </div>
      </div>
      <div className="text-[18px] text-gray-400 mt-12 md:ml-36 ">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="max-w-[1240px] h-[50px] mx-auto mb-4 mt-2 justify-arround items-center md:grid grid-cols-3">
        <div className="col-span-2">
          <input
            type="text"
            placeholder="   Email address"
            className="bg-gray-800 md:w-[800px] px-6 py-4 border mt-2 border-gray-500 rounded"
          />
        </div>
        <div className="mt-2 md:col-span-1 md:flex md:justify-between">
          <button className="w-32 h-10 flex  md:flex bg-red-600 justify-center items-center rounded text-white font-bold md:w-[190px] md:h-[56px] md:ml-[-20px] mx-2 md:px-4 md:py-3.5 md:text-xl hover:bg-red-400 hover:duration-[400ms]">
            Get started
            <FaChevronRight className="mx-0 md:mx-4 " />
          </button>
        </div>
      </div>
      <div className="text-gray-400  md:text-xl md:max-w-[1240px] md:h-[50px] mx-auto mt-20 md:ml-[200px]">
        <p>
          Questions? Call
          <span className=" underline cursor-pointer md:ml-3">
            000-800-919-1694
          </span>
        </p>
      </div>
    </>
  );
}

export default FAQ;
