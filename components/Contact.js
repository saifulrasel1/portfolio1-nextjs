import React from "react";
import Image from "next/image";
import img1 from "../public/assets/contact.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto p-2 py-16 w-full">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 uppercase">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left  */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full w-full">
              <div>
                <Image
                  className="w-full h-full rounded-xl hover:scale-105 duration-500 ease-in"
                  src={img1}
                  width={500}
                  height={1000}
                ></Image>
              </div>
              <div>
                <h2 className="py-2">Name Here</h2>
                <p>Front-End Developer </p>
                <p className="py-4">
                  I am available for freelance or full-time positions.contact me
                  and lets talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between max-w-[330px]  py-4">
                  <div className="shadow-lg shadow-gray-400 p-3 rounded-full cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaLinkedinIn></FaLinkedinIn>
                  </div>
                  <div className="shadow-lg shadow-gray-400 p-3 rounded-full cursor-pointerhover:scale-105 ease-in duration-500">
                    <FaGithub></FaGithub>
                  </div>
                  <div className="shadow-lg shadow-gray-400 p-3 rounded-full cursor-pointerhover:scale-105 ease-in duration-500">
                    <AiOutlineMail></AiOutlineMail>
                  </div>
                  <div className="shadow-lg shadow-gray-400 p-3 rounded-full cursor-pointer  hover:scale-105 ease-in duration-500">
                    <BsFillPersonFill></BsFillPersonFill>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right  */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Number</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    cols="30"
                    rows="10"
                  ></textarea>
                  <button className="w-full p-4 text-gray-100 mt-4 rounded-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="shadow-lg shadow-gray-400 p-6 rounded-full cursor-pointerhover:scale-105 ease-in duration-500" >
              <HiOutlineChevronDoubleUp size={30} className="m-auto  text-[#5651e5]"></HiOutlineChevronDoubleUp>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
