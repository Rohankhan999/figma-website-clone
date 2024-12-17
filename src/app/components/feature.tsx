import React from 'react';
import Image from 'next/image';

export default function Feature() {
    return (
        <div className="w-full flex justify-center items-center pt-7 px-4">
            <div className="w-full md:w-[80%]">
                <div className="w-full">
                    <h3 className="text-red-500 font-bold border-l-4 md:border-l-8 border-red-500 pl-3 ml-1">
                        Feature
                    </h3>
                    <h1 className="text-slate-800 font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl pt-4">
                        New Arrival
                    </h1>
                </div>

                {/* Container */}
                <div className="flex flex-col md:flex-row gap-x-8 gap-y-5 text-white pt-4">
                    {/* PlayStation Section */}
                    <div className="bg-black w-full md:w-[50%] relative">
                        <div className="absolute left-4 bottom-3 text-white">
                            <h1 className="text-lg font-bold md:text-xl">Playstation</h1>
                            <p className="text-xs py-1">
                                Black and White version of the PSS coming out on sale.
                            </p>
                            <button className="text-md font-sans underline underline-offset-8 hover:font-bold">
                                Shop Now
                            </button>
                        </div>
                        <Image
                            src={"/playstation.png"}
                            alt="playstation"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    {/* Women's Collection Section */}
                    <div className="flex flex-col gap-y-5 w-full md:w-[50%]">
                        <div className="bg-black relative h-full">
                            <div className="absolute left-4 bottom-3">
                                <h1 className="text-lg font-bold md:text-xl">Women’s Collections</h1>
                                <p className="text-xs py-1">
                                    Featured woman collections that give you another vibe.
                                </p>
                                <button className="text-md font-sans underline underline-offset-8 hover:font-bold">
                                    Shop Now
                                </button>
                            </div>
                            <Image
                                src={"/exv.png"}
                                alt="women"
                                width={900}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Small Boxes Section */}
                        <div className="flex flex-col sm:flex-row gap-x-0 sm:gap-x-5 gap-y-5">
                            {/* Speakers Section */}
                            <div className="bg-black relative flex justify-center items-center w-full sm:w-[50%] h-full">
                                <div className="absolute left-4 bottom-3">
                                    <h1 className="text-sm font-bold md:text-xl">Speakers</h1>
                                    <p className="text-xs md:py-1">Amazon wireless speakers</p>
                                    <button className="text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">
                                        Shop Now
                                    </button>
                                </div>
                                <Image
                                    src={"/echo.png"}
                                    alt="speakers"
                                    width={200}
                                    height={150}
                                    className="object-cover rounded"
                                />
                            </div>

                            {/* Perfume Section */}
                            <div className="bg-black relative flex justify-center items-center w-full sm:w-[50%] h-full">
                                <div className="absolute left-4 bottom-3">
                                    <h1 className="text-sm font-bold md:text-xl">Perfume</h1>
                                    <p className="text-xs md:py-1">GUCCI INTENSE OUD EDP</p>
                                    <button className="text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">
                                        Shop Now
                                    </button>
                                </div>
                                <Image
                                    src={"/perfume.png"}
                                    alt="perfume"
                                    width={200}
                                    height={150}
                                    className="object-cover rounded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
