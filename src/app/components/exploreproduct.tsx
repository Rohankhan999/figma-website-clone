import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Eproducts from './eproducts';

export default function Explore() {
    return (
        <div className="w-full flex justify-center items-center mt-4 mb-1 pt-20 px-4 overflow-x-hidden">
            <div className="w-full md:w-[80%] pb-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <h3 className="text-red-500 font-bold border-l-4 border-red-500 pl-3 ml-1 inline-block text-lg sm:text-xl md:text-2xl">
                            Our Products
                        </h3>
                        <h1 className="text-slate-800 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl pt-2">
                            Explore Our Products
                        </h1>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-2 mt-4 md:mt-0">
                        <div className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer shadow hover:bg-neutral-200 transition">
                            <FaArrowLeft className="text-black text-sm sm:text-base" />
                        </div>
                        <div className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer shadow hover:bg-neutral-200 transition">
                            <FaArrowRight className="text-black text-sm sm:text-base" />
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="mt-8">
                    <Eproducts />
                </div>
            </div>
        </div>
    );
}
