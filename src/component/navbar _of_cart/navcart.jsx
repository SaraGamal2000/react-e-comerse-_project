import React from "react";
import { useSelector } from "react-redux";

const Navcart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav>
      {/* <h1>Shop</h1> */}
      <div>
        {/* <span>Cart</span> */}
        <span>{totalQuantity}</span>
      </div>
    </nav>
  );
};

export default Navcart;
