import React from "react";

export default function Tabmenu(props) {
  const { children, active, setactive } = props;
  const menus = [
    {
      name: "foods",
    },
    {
      name: "drinks",
    },
    {
      name: "snacks",
    },
    {
      name: "desserts",
    },
    {
      name: "toppings",
    },
  ];
  return (
    <div>
      <div className="flex overflow-x-auto scrollbar-hide pl-4">
        {menus.map((item, index) => (
          <div
            onClick={() => setactive(index)}
            className={`p-2.5 border-b-2 border-solid ${
              active === index ? "border-primary" : "border-white"
            } cursor-pointer mr-4 transition-border duration-300`}
            key={index}
          >
            <p
              className={`font-normal ${
                active === index ? "text-primary" : "text-gray-300"
              } text-lg capitalize `}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}
