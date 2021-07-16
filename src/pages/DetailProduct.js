import React from "react";
import Container from "../components/Container";
import Appbar from "../components/AppbarDetailProduct";
import CardDetailProduct from "../components/CardDetailProduct";

export default function DetailProduct() {
  return (
    <div>
      <Container>
        <Appbar />
        <div>
          <CardDetailProduct />
        </div>
        <div className="px-14 ">
          <div className="mb-8">
            <h1 className="font-bold">Delivery info</h1>
            <p className="text-gray-400">
              Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
            </p>
          </div>
          <div>
            <h1 className="font-bold">Return policy</h1>
            <p className="text-gray-400">
              All our foods are double checked before leaving our stores so by
              any case you found a broken food please contact our hotline
              immediately.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="h-16 flex items-center justify-center w-3/4 text-center text-white font-bold bg-primary rounded-full mt-20 mb-8">
            Add to cart
          </button>
        </div>
      </Container>
    </div>
  );
}
