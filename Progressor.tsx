import React from "react";

export default function Progressor() {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500 "></div>
          </div>
              <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-500">
              step 1: Choose Your Dish
            </h6>
            <p className="text-xs text-white">
              Explore Our Delicious Menu and Select Your Favourite Meal
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500 "></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-500">
              step 2: Customized Your Order
            </h6>
            <p className="text-xs text-white">Tailor Your Meal To Your Taste</p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500 "></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-500">
              step 3: Place Your Order{""}
            </h6>
            <p className="text-xs text-white">
              Ready To Eat? Processed To Checkout and Complete Your Order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
