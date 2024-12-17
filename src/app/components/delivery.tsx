import React from "react";
import { BsHeadset } from "react-icons/bs";
import { FaCheckToSlot } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

export default function Delivery() {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Box 1 */}
        <div className="flex flex-col justify-center items-center gap-y-3 text-center p-4 bg-white shadow-md rounded-lg">
          <div className="w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
            <TbTruckDelivery className="text-3xl text-slate-400" />
          </div>
          <div>
            <h1 className="font-bold text-base sm:text-lg">FREE AND FAST DELIVERY</h1>
            <p className="text-sm text-gray-500">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col justify-center items-center gap-y-3 text-center p-4 bg-white shadow-md rounded-lg">
          <div className="w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
            <BsHeadset className="text-3xl text-slate-400" />
          </div>
          <div>
            <h1 className="font-bold text-base sm:text-lg">24/7 CUSTOMER SERVICE</h1>
            <p className="text-sm text-gray-500">
              Friendly 24/7 customer support
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col justify-center items-center gap-y-3 text-center p-4 bg-white shadow-md rounded-lg">
          <div className="w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
            <FaCheckToSlot className="text-3xl text-slate-400" />
          </div>
          <div>
            <h1 className="font-bold text-base sm:text-lg">
              MONEY BACK GUARANTEE
            </h1>
            <p className="text-sm text-gray-500">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
