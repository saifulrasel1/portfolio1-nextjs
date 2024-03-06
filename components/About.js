import React from "react";
import Image from "next/image";
import img from "../public/assets/rasel.jpg.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen  flex items-center py-16">
      <div className="max-w-[1240px] px-14 m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2  ">
          <p className="uppercase tracking-widest text-xl text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am a noraml developer</p>
          <p className="py-2 text-gray-600">
            I have spent the last 3 years to fire service working as a
            propessional firefighter $ parademic.Creating a great portfolio can
            be hard when you’re focused on getting more , graphic designer, or
            marketer, having your own portfolio website will help you bring more
            visibility to your work and allow you to attract new clients.ihave
            alawys had a
          </p>
          <p className="py-2 text-gray-600">
            work experience. Yet, it's important that you set some time to craft
            your own personal portfolio. Whether you’re a UI designer, user
            experience designer, web designer, graphic designer, or marketer,
            having your own portfolio website will help you bring more
            visibility to your work and allow you to attract new
            clients.Creating a great portfolio can be hard when you’re focused
            on getting more work experience. Yet, it's important that you set
            some time to craft your own personal portfolio. Whether you’re a UI
            designer, user experience designer, web designer
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer ">
            Check out some of my projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500">
          <Image src={img} width={1000} height={1000} className="rounded-xl" alt="/"></Image>
        </div>
        
      </div>
    </div>
  );
};

export default About;
