import React, { useEffect, useState } from "react";

export default function CardDetailProduct(props) {
  const { data } = props;
  return (
    <div>
      <div className="flex justify-center">
        <img
          src={data?.image.url}
          alt="products"
          className="w-60 h-60 rounded-full object-cover shadow-xl transition-all"
        />
      </div>

      {/* <div className="flex items-center justify-center mt-9">
        {data.map((_item, index) => (
          <div
            onClick={() => setindexed(index)}
            key={index}
            className={`h-2 w-2 ${
              index === indexed ? "bg-primary" : "bg-gray-300"
            } rounded-full mr-3 cursor-pointer`}
          />
        ))}
      </div> */}
      <div className="p-8 mt-11 text-center">
        <p className="text-xl font-bold">{data.name}</p>
        <p className="text-lg text-primary mt-4 font-bold">
          Rp {data.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
