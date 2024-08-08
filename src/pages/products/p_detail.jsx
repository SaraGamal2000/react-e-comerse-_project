import React, { useEffect, useState } from "react";
import Detail_comp from "../../component/productcomponent/detail_comp.jsx";

import Api from "../../api/config";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";
import axios from "axios";

export default function P_detail() {
  const [product, setproduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // const id = 1;
  console.log(useParams(Api));
  useEffect(() => {
    console.log("Start API Call");
    console.log("Product ID:", id);
    setLoading(true);
    //`/${id}`
    if (id) {
      setLoading(true);
      Api.get(`/${id}`)
        .then((res) => {
          const respon = res.data.products;
          console.log(respon);
          console.log("API Response:", res.data);
          setproduct(respon);
        })
        .catch(() => {
          setError(true);
          console.log("error", error);
          console.error("Error fetching product data:", error);
          console.error("Error fetching product data:", error.message || error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      console.error("ID is undefined");
    }
  }, [id]);

  return (
    <>
      <div className="bg-light">
        <div style={{ border: "2px", padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Product_detail_page:{id}</h1>
        </div>
        <div
          className=" "
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1px",
          }}
        >
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : error ? (
            <p>There was an error loading the product details.</p>
          ) : product ? (
            <Detail_comp
              {...product}
              id={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              description={product.description}
              rating={product.rating}
            />
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </>
  );
}
