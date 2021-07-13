import React from "react";
import Menu from "../assets/menu.svg";
import Shoping from "../assets/shopingchart.svg";

export default function Appbar() {
  return (
    <div>
      <div className="flex justify-between p-4">
        <img src={Menu} alt="menu" className="cursor-pointer" />
        <img src={Shoping} alt="shoping" className="cursor-pointer" />
      </div>
    </div>
  );
}
