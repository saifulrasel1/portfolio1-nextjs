"use client";
import React, { useState } from "react";
import Image from "next/image";
import img from "../public/assets/navLogo.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full fixed h-20 shadow-xl z-50 bg-gray-100">
      <div className="flex justify-between items-center px-2 w-full h-full 2xl:px-16">
        <Link href="/">
          <h6 className="md:text-6xl lg:text-6xl text-4xl text-[#5651e5]">
            RF
          </h6>
        </Link>
        <div className="">
          <ul className="hidden md:flex">
            <Link href="/">
              <li  onClick={()=>setNav(!nav)} className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li  onClick={()=>setNav(!nav)} className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li onClick={()=>setNav(!nav)} className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li onClick={()=>setNav(!nav)} className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden  ">
            <AiOutlineMenu onClick={handleNav} size={25}></AiOutlineMenu>
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed h-screen w-full bg-black/70 top-0 left-0" : ""
        }
      >
        <div
          className={
            nav
              ? " md:hidden fixed w-[75%] sm:w-[60%] md:w-[45%] h-screen top-0 left-0 bg-[#ecf0f3] ease-in duration-500 px-8"
              : "fixed w-[75%] sm:w-[60%] md:w-[45%] h-screen top-0 left-[-100%] bg-[#ecf0f3] ease-in duration-500 px-8"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <h6 className="md:text-6xl lg:text-6xl text-4xl text-[#5651e5]">
                  RF
                </h6>
              </Link>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose onClick={handleNav} size={30}></AiOutlineClose>
              </div>
            </div>
            <div className=" border-b my-4 border-gray-300">
              <p className="uppercase w-[85%] md:w-[90%] py-4">
                Lets Build Something legendary together
              </p>
            </div>
            <div>
              <ul>
                <Link href="/">
                  <li onClick={()=>setNav(!nav)} className="py-4  text-sm uppercase hover:border-b">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li className="py-4  text-sm uppercase hover:border-b">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={()=>setNav(!nav)} className=" py-4 text-sm uppercase hover:border-b">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={()=>setNav(!nav)} className=" text-sm uppercase hover:border-b">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={()=>setNav(!nav)} className="py-4 text-sm uppercase hover:border-b">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Lets Connect
                </p>
                <div className="flex items-center justify-between py-4 w-full sm:w-[70%]">
                  <div className="shadow-lg shadow-gray-400 rounded-full cursor-pointer p-3 hover:scale-105 ease-in duration-500">
                    <FaLinkedin></FaLinkedin>
                  </div>
                  <div className="shadow-lg shadow-gray-400 rounded-full cursor-pointer p-3 hover:scale-105 ease-in duration-500">
                    <FaGithub></FaGithub>
                  </div>
                  <div className="shadow-lg shadow-gray-400 rounded-full cursor-pointer p-3 hover:scale-105 ease-in duration-500">
                    <Link href='/'>
                    <AiOutlineMail ></AiOutlineMail></Link>
                  </div>
                  <div className="shadow-lg shadow-gray-400 rounded-full cursor-pointer p-3 hover:scale-105 ease-in duration-500">
                    <BsFillPersonFill></BsFillPersonFill>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
