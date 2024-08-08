import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import "./product_c.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/slices/Cartslices";

function Product_comp({ title, price, images }) {
  // const { title, price, images } = product;
  // const { title, price, images } = product;
  const { id } = useParams();
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = { title, price, images, id };
    if (product) {
      dispatch(addToCart(product));
    } else {
      console.error("product is not defined");
    }
  };
  return (
    <Card
      className="pc mb-4 w-25 d-flex shadow bg-body-tertiary"
      bg={darkMode ? "dark" : "light"}
      expand="lg"
      data-bs-theme={darkMode ? "dark" : "light"}
    >
      <Card.Body className="h-50 ">
        {images && images.length > 0 && (
          <div className="mb-2 border rounded ">
            <img src={images[0]} alt={title} className=" w-50 h-75 rounded" />
          </div>
        )}
      </Card.Body>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Text
          style={{ fontSize: "20px", fontWeight: "bolder", color: "red" }}
        >
          Price: ${price}
        </Card.Text>

        <Button className="bg-primary m-2 " onClick={handleAddToCart}>
          Add to cart
        </Button>

        <Button className="bg-primary pe-5">
          <Link className="nav-link  " to={`/detail/${id}`}>
            Details
          </Link>
        </Button>
      </Card.Header>
    </Card>
  );
}
export default Product_comp;
