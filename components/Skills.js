import React from "react";
import Image from "next/image";
import img1 from "../public/assets/skills/html.png";
import img2 from "../public/assets/skills/css.png";
import img3 from "../public/assets/skills/Javascript.png";
import img4 from "../public/assets/skills/react.png";
import img5 from "../public/assets/skills/Tailwind.png";
import img6 from "../public/assets/skills/Firebase.png";
import img7 from "../public/assets/skills/node.png";
import img8 from "../public/assets/skills/nextjs.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase tracking-widest text-[#6561e5]">Skills</p>
        <h2 className="py-4">What Can I Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img1} width={64} height={64}></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3> html</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img2} width={64} height={64}></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3> css</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img3} width={64} height={64}></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3> Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img4} width={64} height={64}></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3> React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img5} width={64} height={64}></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3> Tailwind css</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img6} width={64} height={64}></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3> Firebase</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img7} width={64} height={64}></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={img8} width={64} height={64}></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>NextJs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
