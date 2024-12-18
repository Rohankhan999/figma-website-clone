import React from "react";

export default function Music() {
    return (
        <main className="w-full flex justify-center items-center mt-10 mb-1">
            <div className="w-full md:w-[80%] sm:p-3 md:p-5 sm:h-auto md:h-[400px] flex sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center bg-black">
                {/* Text Section */}
                <div className="w-full md:w-[50%] p-4">
                    <h3 className="text-green-500 font-bold sm:text-sm md:text-base">Categories</h3>
                    <h1 className="text-white font-bold sm:text-2xl md:text-3xl lg:text-5xl pt-2 sm:pt-3">
                        Enhance Your
                    </h1>
                    <h1 className="text-white font-bold sm:text-2xl md:text-3xl lg:text-5xl pt-1 sm:pt-2">
                        Music Experience
                    </h1>

                    {/* Timer */}
                    <div className="flex sm:flex-wrap sm:justify-start md:justify-start pt-3 pb-3 gap-4">
                        <div className="bg-slate-50 sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] sm:rounded-none md:rounded-full flex flex-col justify-center items-center">
                            <span className="font-bold sm:text-md md:text-lg">23</span>
                            <span className="sm:text-xs md:text-sm">Hours</span>
                        </div>

                        <div className="bg-slate-50 sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] sm:rounded-none md:rounded-full flex flex-col justify-center items-center">
                            <span className="font-bold sm:text-md md:text-lg">05</span>
                            <span className="sm:text-xs md:text-sm">Days</span>
                        </div>

                        <div className="bg-slate-50 sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] sm:rounded-none md:rounded-full flex flex-col justify-center items-center">
                            <span className="font-bold sm:text-md md:text-lg">59</span>
                            <span className="sm:text-xs md:text-sm">Minutes</span>
                        </div>

                        <div className="bg-slate-50 sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] sm:rounded-none md:rounded-full flex flex-col justify-center items-center">
                            <span className="font-bold sm:text-md md:text-lg">35</span>
                            <span className="sm:text-xs md:text-sm">Seconds</span>
                        </div>
                    </div>

                    <button className="bg-green-600 hover:bg-green-800 sm:px-4 md:px-7 py-2 text-white font-bold rounded-sm sm:text-sm md:text-base h-10 mt-3">
                        Buy Now!
                    </button>
                </div>

                {/* Image Section */}
                <div className="sm:w-full md:w-[40%] lg:w-[40%] sm:mt-3 md:mt-0 pl-6 flex justify-center items-center">
                    <img
                        src="speaker.png"
                        alt="Music Speaker"
                        className="w-full h-auto shadow-md"
                    />
                </div>
            </div>
        </main>
    );
}
