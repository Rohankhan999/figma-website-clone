import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";

export default function Navbar() {
    return (
        <header className="bg-white shadow-sm border-b mx-auto flex flex-col">
            {/* Sale Banner */}
            <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-4 md:px-8 w-full">
                <div className="text-center flex-1 text-xs sm:text-sm">
                    Summer Sale All Swim Suits And Free Express Delivery - OFF 50%!
                    <a href="#" className="underline hover:text-slate-300 ml-1">Shop Now</a>
                </div>
                <div className="flex items-center gap-[2px]">
                    <div className="text-white text-xs sm:text-sm font-normal">
                        English
                    </div>
                    <RiArrowDropDownLine className="text-white text-2xl sm:text-3xl" />
                </div>
            </div>

            {/* Main Navigation */}
            <div className="flex justify-between items-center px-4 md:px-20 py-4">
                <h1 className="text-xl sm:text-2xl font-bold text-black px-2 sm:px-12">Exclusive</h1>
                
                {/* Navigation Menu */}
                <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
                    <a href="#" className="text-slate-600 hover:text-black underline">Home</a>
                    <a href="#" className="text-slate-600 hover:text-black">Contact</a>
                    <a href="#" className="text-slate-600 hover:text-black">About</a>
                    <a href="#" className="text-slate-600 hover:text-black">Sign Up</a>
                </nav>

                {/* Icons */}
                <div className="flex items-center space-x-4 sm:space-x-6">
                    {/* Search Bar */}
                    <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-2 py-1">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-slate-100 outline-none text-xs sm:text-sm px-1"
                        />
                        <CiSearch className="text-gray-500" />
                    </div>
                    {/* Action Icons */}
                    <CiSearch className="lg:hidden text-lg sm:text-xl" />
                    <CiHeart className="text-lg sm:text-xl" />
                    <CiShoppingCart className="text-lg sm:text-xl" />
                </div>
            </div>
        </header>
    );
}
