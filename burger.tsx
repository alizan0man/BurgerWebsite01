import react from 'react'

const products = [
    {
      id: 1,
      title: "Fajita Burger",
      category: "fixing",
      price: "300.00",
      imageUrl:"https://img.freepik.com/free-photo/juicy-burger-with-fresh-vegetables-cafe-table_343596-1850.jpg?ga=GA1.1.2082299742.1716266388&semt=ais_hybrid",
      Bgcolor: "bg-amber-500"
    },
    {
      id: 2,
      title: "Egg Burger",
      category: "Delight",
      price: "550.00",
      imageUrl:"https://img.freepik.com/free-photo/front-view-cheeseburger-with-fried-egg_23-2148784516.jpg?ga=GA1.1.2082299742.1716266388&semt=ais_hybrid",
      Bgcolor: "bg-teal-500"
    },
  
    {
      id: 3,
      title: "Smokey Burger",
      category: "fixing",
      price: "250.00",
      imageUrl:"https://img.freepik.com/premium-photo/burgers-hot-flaming-bbq-charcoal-grill_1311477-109590.jpg?ga=GA1.1.2082299742.1716266388&semt=ais_hybrid",
      Bgcolor: "bg-amber-500",
    },
  ];
  export default function ProductList() {
    return (
      <div className="p-1 flex flex-wrap items-center justify-center mb-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex shrink-0 m-6 relative overflow-hidden ${product.Bgcolor} rounded-lg max-w-sm  shadow-lg group `}
          >
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                height="152"
                width="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                height="152"
                width="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black,transparent 60%",
                  transform: "rotate3d(0,0,1,20deg) scale3d(1,0.6,1)",
                  opacity: 0.2,
                }}
               ></div>
            
              <img
                className=" relative w-52 bottom-5 "
                src={product.imageUrl}
                alt={product.title}
        
              />
            </div>
  
            <div className="relative text-white px-6 pb-6 mt-6 ">
              <span className="block opacity-75 -mb-1 ">{product.category}</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl ">
                  {product.title}
                </span>
                <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  