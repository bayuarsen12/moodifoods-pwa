import React from "react";
import { withRouter } from "react-router-dom";

function CardProduct(props) {
  const { data } = props;
  return (
    <div
      onClick={() => props.history.push("/product/" + data._id)}
      className="bg-transparent mr-8 cursor-pointer"
    >
      <div className="h-64 w-56 rounded-3xl shadow-2xl flex flex-col items-center">
        <img
          src={data.image.url}
          alt="products"
          className="w-40 h-40 rounded-full object-cover -mt-12 shadow-xl"
        />
        <div className="p-8 text-center">
          <p className="text-xl font-bold">{data.name}</p>
          <p className="text-lg text-primary mt-4 font-bold">
            Rp {data.price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(CardProduct);
