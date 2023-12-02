import React from 'react';

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto h-[200px] p-4 mb-40 justify-center items-center text-white md:grid grid-cols-4">
      <div className="text-gray-400 col-span-1  text-md underline my-3">
        <p className="m-2">
          <span className=" p-2">FAQ</span> <br /> <br />
          <span className="p-2">Investor Relations</span> <br />
          <br />
          <span className="p-2">Privacy</span> <br />
          <br />
          <span className="p-2">Speed Test</span>
          <br />
        </p>
      </div>
      <div className="text-gray-400 col-span-1  text-md underline my-3">
        <p className="m-2">
          <span className=" p-2">Help Center</span> <br /> <br />
          <span className="p-2">Jobs</span> <br />
          <br />
          <span className="p-2">Cookie Preferences</span> <br />
          <br />
          <span className="p-2">Legal Notices</span>
          <br />
        </p>
      </div>
      <div className="text-gray-400 col-span-1  text-md underline my-3">
        <p className="m-2">
          <span className=" p-2">Accounts</span> <br /> <br />
          <span className="p-2">Ways to Watch</span> <br />
          <br />
          <span className="p-2">Corporate Information</span> <br />
          <br />
          <span className="p-2">Only on Netflix</span>
          <br />
        </p>
      </div>
      <div className="text-gray-400 col-span-1  text-md underline my-3">
        <p className="m-2 mt-[-35px]">
          <span className="pl-2">Media Center</span> <br />
          <br />
          <span className="p-2">Terms of use</span> <br />
          <br />
          <span className="p-2">Contact us</span>
          <br />
        </p>
      </div>
      <div className="mt-4">
        <select
          name=""
          id=""
          className="text-white bg-gray-900 border border-gray-600 rounded p-2 w-28 font-semibold"
        >
          <option value="" selected>
            English
          </option>
          <option value="">हिन्दी</option>
        </select>
        <p className=" text-gray-400 font-semibold ml-4 mt-12 mb-20">
          Netflix India
        </p>
      </div>
    </div>
  );
}

export default Footer;
