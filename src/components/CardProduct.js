import React from "react";
import { withRouter } from "react-router-dom";

function CardProduct(props) {
  return (
    <div
      onClick={() => props.history.push("/detail-product")}
      className="bg-transparent mr-8 cursor-pointer"
    >
      <div className="h-64 w-56 rounded-3xl shadow-2xl flex flex-col items-center">
        <img
          src="https://blog.tokowahab.com/wp-content/uploads/2020/01/Resep-Choco-Lava-Lumer.jpg"
          alt="products"
          className="w-40 h-40 rounded-full object-cover -mt-12 shadow-xl"
        />
        <div className="p-8 text-center">
          <p className="text-xl font-bold">Chocolava</p>
          <p className="text-lg text-primary mt-4 font-bold">Rp 10.000</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(CardProduct);
