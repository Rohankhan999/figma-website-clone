import React from "react";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones, CiMobile4 } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";

export default function Category() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1 px-4">
      <div className="w-full max-w-[1200px] pb-10">
        {/* Title Section */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h3 className="text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1">
              Categories
            </h3>
            <h1 className="text-slate-800 font-bold text-lg md:text-2xl lg:text-3xl pt-4">
              Browse By Category
            </h1>
          </div>

          {/* Navigation */}
          <div className="flex gap-2">
            <div className="w-[40px] h-[40px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
              <FaArrowLeft className="text-black" />
            </div>
            <div className="w-[40px] h-[40px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
              <FaArrowRight className="text-black" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
          {/* Category Box */}
          {[ 
            { icon: <CiMobile4 className="text-4xl" />, label: "Phones" },
            { icon: <HiOutlineComputerDesktop className="text-4xl" />, label: "Computers" },
            { icon: <BsSmartwatch className="text-4xl" />, label: "Smart Watch" },
            { icon: <CiCamera className="text-4xl" />, label: "Camera" },
            { icon: <CiHeadphones className="text-4xl" />, label: "Headphones" },
            { icon: <SiYoutubegaming className="text-4xl" />, label: "Gaming" },
          ].map((category, index) => (
            <div
              key={index}
              className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 flex flex-col gap-y-2 justify-center items-center p-4 sm:p-6 h-[120px] sm:h-[150px] cursor-pointer text-center"
            >
              {category.icon}
              <p className="font-normal text-sm sm:text-base">{category.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 