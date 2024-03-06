import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const main = () => {
  return (
    <div id="main" className="text-center w-full h-screen">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-gray-600 py-2">
            {" "}
            Lets Build Something legendary together
          </p>
          <h1>
            Hi i,m{" "}
            <span className="text-[#5651ef] uppercase"> Saiful RAsel</span>
          </h1>
          <h1 className="uppercase py-4 text-gray-600">
            A front-end developer{" "}
          </h1>
          <p className="uppercase py-4 text-gray-600 max-w-[70%] m-auto">
            i am front-end web developer specializing in building (and
            occasionally designing ) exceptional digital experience.currently
            i,m focused on building responsive front-end web applications while
            learning back-end technologies.{" "}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="shadow-lg shadow-gray-400 p-6 rounded-full cursor-pointer p-3 hover:scale-105 ease-in duration-500">
              <FaLinkedinIn></FaLinkedinIn>
            </div>
            <div className="shadow-lg shadow-gray-400 p-6 rounded-full cursor-pointer p-3 hover:scale-105 ease-in duration-500">
              <FaGithub></FaGithub>
            </div>
            <div className="shadow-lg shadow-gray-400 p-6 rounded-full cursor-pointer p-3 hover:scale-105 ease-in duration-500">
              <AiOutlineMail></AiOutlineMail>
            </div>
            <div className="shadow-lg shadow-gray-400 p-6 rounded-full cursor-pointer p-3 hover:scale-105 ease-in duration-500">
              <BsFillPersonFill></BsFillPersonFill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
