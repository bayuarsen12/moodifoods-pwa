import React from "react";

export default function CardDetailProduct() {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="https://blog.tokowahab.com/wp-content/uploads/2020/01/Resep-Choco-Lava-Lumer.jpg"
          alt="products"
          className="w-60 h-60 rounded-full object-cover  shadow-xl"
        />
      </div>
      <div className="flex items-center justify-center mt-9">
        <div className="h-2 w-2 bg-primary rounded-full mr-3 cursor-pointer" />
        <div className="h-2 w-2 bg-gray-300 rounded-full mr-3 cursor-pointer" />
        <div className="h-2 w-2 bg-gray-300 rounded-full mr-3 cursor-pointer" />
        <div className="h-2 w-2 bg-gray-300 rounded-full cursor-pointer" />
      </div>
      <div className="p-8 mt-11 text-center">
        <p className="text-xl font-bold">Chocolava</p>
        <p className="text-lg text-primary mt-4 font-bold">Rp 10.000</p>
      </div>
    </div>
  );
}
