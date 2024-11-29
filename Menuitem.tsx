import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const ProductCardGrid = () => {
  const productImages = [
    "https://img.freepik.com/premium-photo/floating-hamburger-with-juicy-meat-cheese-lettuce-tomato-splash-dark-background_1081313-792.jpg?ga=GA1.1.2082299742.1716266388&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/close-up-chicken-burger-highlighting-detail_1274264-12840.jpg?ga=GA1.1.2082299742.1716266388&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg?ga=GA1.1.2082299742.1716266388&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/photorealistic-burger-meal_23-2151432928.jpg?ga=GA1.1.2082299742.1716266388&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/big-max-burger-standing-piece-wood_114579-2174.jpg?ga=GA1.1.2082299742.1716266388&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/side-view-black-burger-with-french-fries-ketchup-flowers-wooden-tray-wooden-table_176474-3014.jpg?ga=GA1.1.2082299742.1716266388&semt=ais_hybrid",
  ];
  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/pizza-restaurant-food-hand-drawing-illustration_7145-19165.jpg?ga=GA1.1.2082299742.1716266388&semt=ais_hybrid')`,
          backgroundPosition: "",
          backgroundSize: "cover",
          zIndex: 0,
          opacity: 0.1,
        }}
      />
      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">
        Most Requested Items
      </h1>
      <h1 className="text-3xl text-white z-10 relative">Order Now</h1>
      <section
        id="projects"
        className="w-fit mx-auto grid gird-cols-1 lg:grid-cols-3 md:grid-cols-2  justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 "
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:sacle-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img
                src={productImages[index]}
                alt={`product${index + 1}`}
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-slate-500 mr-3 uppercase text-xs">
                  Category
                </span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  Burger {index + 1}
                </p>
                <div className=" flex items-center">
                    <p className="text-lg font-semibold text-black my-3 cursor-auto">200.00 </p>
                    <del>
                        <br/>
                        <p className="text-sm text-blue-800 cursor-auto ml-2">{""}250.00</p>
                    </del>
                    <div className="ml-auto">
                    <FaCartShopping className="w-5 h-5 text-blue-800"/>

                    </div>

                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};
export default ProductCardGrid;
