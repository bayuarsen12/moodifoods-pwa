import React from "react";

export default function Container(props) {
  const { children } = props;
  return (
    <div className="flex justify-center w-full bg-gray-300">
      <div className="min-h-screen max-w-md bg-white w-full">{children}</div>
    </div>
  );
}
