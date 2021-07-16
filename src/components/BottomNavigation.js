import React, { useState } from "react";
import HomeIcon from "../assets/home-icon";
import FavouriteIcon from "../assets/favorit-icon";
import TransactionIcon from "../assets/transaction-icon";
import ProfileIcon from "../assets/profile-icon";

export default function BottomNavigation() {
  const [indexed, setindexed] = useState(0);
  const navigation = [
    {
      icon: <HomeIcon active={indexed === 0 ? true : false} />,
      path: "/",
    },
    {
      icon: <FavouriteIcon active={indexed === 1 ? true : false} />,
      path: "/",
    },
    {
      icon: <TransactionIcon active={indexed === 2 ? true : false} />,
      path: "/",
    },
    {
      icon: <ProfileIcon active={indexed === 3 ? true : false} />,
      path: "/",
    },
  ];
  return (
    <div className="flex justify-center w-full">
      <div className="fixed bottom-0 max-w-md w-full flex items-center justify-between px-14 py-6 bg-white shadow z-50">
        {navigation.map((item, index) => (
          <div
            onClick={() => {
              setindexed(index);
            }}
            className="cursor-pointer"
            key={index}
          >
            {item.icon}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
