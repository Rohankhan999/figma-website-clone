import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Fproducts from './fproducts';

export default function FlashSale() {
    return (
        <div className="w-full flex justify-center items-center mt-4 mb-1 pt-10">
            <div className="w-full md:w-[80%] pb-10 px-4">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <div>
                        <h3 className="text-red-500 font-bold border-l-8 border-red-500 pl-3">Today’s</h3>
                        <h1 className="text-slate-800 font-bold text-2xl md:text-3xl lg:text-3xl pt-2">
                            Flash Sale
                        </h1>
                    </div>

                    {/* Timer Section */}
                    <div className="flex justify-center items-center gap-4 mt-4 sm:mt-0">
                        {/* Days */}
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-medium">Days</span>
                            <span className="text-2xl font-bold">03</span>
                        </div>
                        {/* Separator */}
                        <div className="text-red-500">:</div>

                        {/* Hours */}
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-medium">Hours</span>
                            <span className="text-2xl font-bold">23</span>
                        </div>
                        <div className="text-red-500">:</div>

                        {/* Minutes */}
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-medium">Minutes</span>
                            <span className="text-2xl font-bold">19</span>
                        </div>
                        <div className="text-red-500">:</div>

                        {/* Seconds */}
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-medium">Seconds</span>
                            <span className="text-2xl font-bold">56</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-2 mt-4 sm:mt-0">
                        <div className="w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
                            <FaArrowLeft className="text-black" />
                        </div>
                        <div className="w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
                            <FaArrowRight className="text-black" />
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="w-full mt-6">
                    <Fproducts />
                </div>
            </div>
        </div>
    );
}
