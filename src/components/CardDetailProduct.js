import React, { useEffect, useState } from "react";

export default function CardDetailProduct() {
  const [indexed, setindexed] = useState(0);
  const data = [
    { url: "https://bisikan.com/images/AnekaKue/kue-colkatlavacake.jpg" },
    {
      url: "https://blog.tokowahab.com/wp-content/uploads/2020/01/Resep-Choco-Lava-Lumer.jpg",
    },
    {
      url: "https://lavacakechoco.files.wordpress.com/2015/05/moltonlavacake.jpg",
    },
    {
      url: "https://blog.roomme.id/wp-content/uploads/2020/05/IMG_6207-chocolate-molten-lava-cakes-recipe-square.jpg",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      if (indexed !== data.length - 1) {
        setindexed(indexed + 1);
      } else {
        setindexed(0);
      }
    }, 3000);
  }, [data]);
  return (
    <div>
      <div className="flex justify-center">
        {data.map((_item, index) => {
          if (index === indexed) {
            return (
              <img
                key={index}
                src={data[index]?.url}
                alt="products"
                className="w-60 h-60 rounded-full object-cover shadow-xl"
              />
            );
          }
        })}
      </div>

      <div className="flex items-center justify-center mt-9">
        {data.map((_item, index) => (
          <div
            onClick={() => setindexed(index)}
            key={index}
            className={`h-2 w-2 ${
              index === indexed ? "bg-primary" : "bg-gray-300"
            } rounded-full mr-3 cursor-pointer`}
          />
        ))}
      </div>
      <div className="p-8 mt-11 text-center">
        <p className="text-xl font-bold">Choco lava</p>
        <p className="text-lg text-primary mt-4 font-bold">Rp 10.000</p>
      </div>
    </div>
  );
}
