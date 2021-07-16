import React from "react";
import Menu from "../assets/menu.svg";
import Shopping from "../assets/shopingchart.svg";

export default function Appbar() {
  return (
    <div>
      <div className="flex justify-between py-8 p-6">
        <img src={Menu} alt="menu" className="cursor-pointer" />
        <img src={Shopping} alt="shoping" className="cursor-pointer" />
      </div>
    </div>
  );
}
