import React from "react";
import Back from "../assets/back-icon.svg";
import Favourite from "../assets/favourite-icon.svg";

export default function Appbar() {
  return (
    <div>
      <div className="flex justify-between p-6">
        <img src={Back} alt="back" className="cursor-pointer" />
        <img src={Favourite} alt="favourite" className="cursor-pointer" />
      </div>
    </div>
  );
}
