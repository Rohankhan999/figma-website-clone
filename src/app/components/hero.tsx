
"use client"
import React, { useState } from 'react';
import { FaApple, FaArrowRight, FaBars } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex justify-center items-center px-4 py-6 md:px-10'>
      <div className='max-w-[1440px] flex flex-col md:flex-row gap-6 justify-center'>

        {/* Burger Menu for Mobile */}
        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-black flex items-center gap-2 font-semibold'>
            <FaBars size={20} />
            <span>Categories</span>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <ul className='mt-4 space-y-2 bg-white shadow-md p-4 rounded-lg'>
              {[
                "Woman’s Fashion",
                "Men’s Fashion",
                "Electronics",
                "Home & Lifestyle",
                "Medicine",
                "Sports & Outdoor",
                "Baby’s & Toys",
                "Groceries & Pets",
                "Health & Beauty",
              ].map((item, index) => (
                <li
                  key={index}
                  className='flex justify-between items-center text-slate-800 hover:underline cursor-pointer hover:text-blue-500 transition-all duration-150'>
                  <span>{item}</span>
                  {index < 2 && <IoIosArrowForward className='text-lg ml-2' />}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sidebar Menu - Hidden on Mobile */}
        <div className='hidden md:block border-r-2 border-neutral-200 p-10'>
          <ul className='space-y-4'>
            {[
              "Woman’s Fashion",
              "Men’s Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby’s & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((item, index) => (
              <li
                key={index}
                className='flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover:text-blue-500 transition-all duration-150'>
                <span>{item}</span>
                {index < 2 && <IoIosArrowForward className='text-lg ml-2' />}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Section */}
        <div className='flex items-center bg-black rounded-lg p-4 sm:p-6 w-full md:w-auto'>
          {/* Text Content */}
          <div className='text-white flex flex-col justify-center space-y-5 w-full md:w-[400px]'>
            <div className='flex items-center gap-2'>
              <FaApple className='text-2xl' />
              <span className='text-sm md:text-base font-semibold'>iPhone 14 Series</span>
            </div>
            <h1 className='text-2xl font-bold leading-snug md:text-5xl'>Up to 10% off Voucher</h1>
            <Link
              href={"#"}
              className='underline underline-offset-4 hover:font-semibold flex items-center gap-2'>
              Shop Now
              <FaArrowRight />
            </Link>
          </div>

          {/* Image */}
          <div className='ml-auto mt-4 md:mt-0'>
            <img
              src="/iphone1.png"
              alt="iPhone"
              className='w-[180px] md:w-auto object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
