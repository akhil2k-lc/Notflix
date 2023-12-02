import Cardss from './Cardss';
import FAQ from './FAQ';
import Footer from './Footer';
import Navbar from './Navbar';
import { FaChevronRight } from 'react-icons/fa';

const Hero = ({ setLoginUSer }) => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen  relative inset-0 bg-gradient-to-b from-black to-transparent"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/abstract-luxury-black-gradient-with-border-black-vignette-backgr_1258-275.jpg?w=740&t=st=1701457617~exp=1701458217~hmac=b6775fa1b6232da76761946467aa9c4a6867c06ef73ecc699471e375cdcd15be')",
        }}
      >
        <Navbar />
        <div className="max-w-[1240px] mx-auto text-white  h-[400px] mt-8 grid grid-cols-1">
          <div className="  flex-wrap grid grid-cols-1 p-4">
            <h1 className="mt-16 text-3xl md:mt-48 md:text-6xl font-bold">
              Unlimited movies, <br /> TV shows and more
            </h1>
            <p className="text-gray-200 text-xl font-bold">
              Starts at ₹149. Cancel anytime.
            </p>
            <p className="gap-x-4 mt-6 text-gray-300">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex  mt-10">
              <div className="flex ">
                <input
                  type="text"
                  placeholder="  Email address to login"
                  className=" w-[200px] md:w-[350px] rounded border border-gray-400  bg-slate-900 text-white hover:text-xl opacity-[100px] duration-100"
                />
              </div>

              <button
                className="w-[120px] text-sm p-0 flex  md:flex bg-red-600 justify-center items-center rounded text-white font-bold md:w-[190px] mx-2 px-4 py-3 md:text-xl hover:bg-red-400 hover:duration-[400ms]"
                onClick={() => setLoginUSer({})}
              >
                Start
                <FaChevronRight className="mx-0 md:mx-4 " />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-0 border-gray-700 h-1 bg-gray-800 hover:bg-gray-700 duration-500" />
      <Cardss />
      <FAQ />
      <Footer />
    </>
  );
};

export default Hero;
