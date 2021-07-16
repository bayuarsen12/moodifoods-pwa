import React from "react";
import { withRouter } from "react-router-dom";
import Back from "../assets/back-icon.svg";
import Favourite from "../assets/favourite-icon.svg";

function Appbar(props) {
  return (
    <div>
      <div className="flex justify-between p-6">
        <img
          onClick={() => props.history.push("/")}
          src={Back}
          alt="back"
          className="cursor-pointer"
        />
        <img src={Favourite} alt="favourite" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default withRouter(Appbar);
