import React from "react";

const Product = ({ products }) => {
  return (
    <>
      {products.map(
        ({ id, title, image, description, price, rating: { rate, count } }) => (
          <div
            key={id}
            className="bg-white dark:bg-stone-800 dark:text-white hover:shadow-lg transition-shadow duration-200 rounded overflow-hidden cursor-pointer group block"
          >
            <div className="w-full h-48 relative pt-2">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain px-4"
              />
            </div>

            <div className="p-2 space-y-1">
              <h4
                className="text-sm  line-clamp-2 min-h-[40px] leading-tight"
                title={title}
              >
                {title}
              </h4>

              <div className="flex items-center gap-2">
                <span className="text-[#f85606] text-lg font-medium">
                  Rs.{Math.floor(price * 278).toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <div className="flex">{rate}</div>
                <span className="text-xs text-gray-400">({count})</span>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Product;
