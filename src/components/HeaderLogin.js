import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "../assets/logo.svg";

function HeaderLogin(props) {
  return (
    <div className="rounded-b-3xl px-6 pt-16 bg-white shadow-md">
      <div className="flex justify-center mb-8">
        <img src={Logo} alt="logo" className="w-36" />
      </div>
      <div className="flex justify-between px-12">
        <div
          onClick={() => {
            props.history.push("/login");
          }}
          className="py-4 px-8 cursor-pointer border-b-4 border-solid border-primary"
        >
          <p className="text-lg font-bold">Masuk</p>
        </div>
        <div
          onClick={() => {
            props.history.push("/register");
          }}
          className="py-4 px-8 cursor-pointer border-b-4 border-solid border-white"
        >
          <p className="text-lg font-bold">Daftar</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(HeaderLogin);
