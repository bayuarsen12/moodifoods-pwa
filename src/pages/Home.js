import React, { useState } from "react";
import Container from "../components/Container";
import Appbar from "../components/Appbar";
import Search from "../assets/search.svg";
import Tabmenu from "../components/Tabmenu";
import CardProduct from "../components/CardProduct";
import BottomNavigation from "../components/BottomNavigation";

export default function Home() {
  const [activeTab, setactiveTab] = useState(0);
  return (
    <div>
      <Container>
        <Appbar />
        <div className="mt-6 p-4 mb-4">
          <h1 className="text-4xl font-bold font-sans w-7/12">
            Delicious food for you
          </h1>
          <div className="mt-7 flex items-center py-5 px-8 bg-gray-100 rounded-full">
            <img src={Search} alt="search" />
            <input
              type="text"
              placeholder="Search"
              className="ml-4 bg-transparent text-base font-semibold"
            />
          </div>
        </div>
        <div>
          <Tabmenu active={activeTab} setactive={setactiveTab}>
            <p className="text-primary cursor-pointer text-right pr-4">
              see more
            </p>
            <div className="flex overflow-x-auto scrollbar-hide pt-16 pb-8 pl-4">
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
          </Tabmenu>
        </div>
        <div className="mb-16" />
      </Container>

      <BottomNavigation />
    </div>
  );
}
