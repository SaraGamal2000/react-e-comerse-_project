import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Store/slices/Cartslices";
import { Button, Card } from "react-bootstrap";
export default function Cartpage() {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  if (totalQuantity === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <Card className="container m-5">
      <div>
        <h1>Your Cart</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Button onClick={() => dispatch(removeFromCart(item.id))}>
                <h1>-</h1>
              </Button>
              <span>{item.title}</span>
              {item.images && item.images.length > 0 && (
                <img
                  src={item.images}
                  alt={item.title}
                  style={{ width: "50px", height: "auto", marginLeft: "10px" }}
                />
              )}
              <span>{item.quantity}</span>
              <span>{item.totalPrice}</span>

              <Button onClick={() => dispatch(addToCart(item))}>
                <h1>+</h1>
              </Button>
            </li>
          ))}
        </ul>
        <div>
          <h2>Total Price: {totalPrice}</h2>
        </div>
      </div>
    </Card>
  );
}
