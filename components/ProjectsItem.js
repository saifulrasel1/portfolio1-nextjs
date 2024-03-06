import React from "react";
import Image from "next/image";
import img1 from "../public/assets/projects/property.jpg";
import img2 from "../public/assets/projects/netflix.jpg";
import img3 from "../public/assets/projects/twitch.jpg";
import img4 from "../public/assets/projects/crypto.jpg";
import Link from "next/link";

const ProjectsItem = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative flex items-center justify-center rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#eef0f5] h-auto w-full shadow-xl shadow-gray-600">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={img1}
          width={1000}
          height={1000}
        ></Image>
        <div className="  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-[#5651e5] tracking-wider">
            Property finder
          </h3>
          <Link href="/">
            <p className="pb-4 pt-2 text-[#5651e5] text-center text-blue text-lg">
              More Info
            </p>
          </Link>
        </div>
      </div>
      <div className="relative flex items-center justify-center rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] h-auto w-full shadow-xl shadow-gray-600">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={img2}
          width={1000}
          height={1000}
        ></Image>
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-[#5651e5] tracking-wider">
            netflix
          </h3>
          <Link href="/">
            <p className="pb-4 pt-2 text-[#5651e5] text-center text-blue text-lg">
              More Info
            </p>
          </Link>
        </div>
      </div>
      <div className="relative flex items-center justify-center rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] h-auto w-full shadow-xl shadow-gray-600">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={img3}
          width={1000}
          height={1000}
        ></Image>
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-[#5651e5] tracking-wider">
            twitch
          </h3>
          <Link href="/">
            <p className="pb-4 pt-2 text-[#5651e5] text-center text-blue text-lg">
              More Info
            </p>
          </Link>
        </div>
      </div>
      <div className="relative flex items-center justify-center rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] h-auto w-full shadow-xl shadow-gray-600">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={img4}
          width={1000}
          height={1000}
        ></Image>
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-[#5651e5] tracking-wider">
            crypto
          </h3>
          <Link href="/">
            <p className="pb-4 pt-2 text-[#5651e5] text-center text-blue text-lg">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
