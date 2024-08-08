import Api from "../../api/config";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Product_comp from "../../component/productcomponent/product_c";

function Productpage() {
  const [products, setproducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Start API Call");
    setLoading(true);

    Api.get()
      .then((res) => {
        console.log(res.data.products);
        setproducts(res.data.products);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="bg-light">
        <div style={{ border: "2px", padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Productpage</h1>
        </div>
        <div
          className=" container bg-light "
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
          ) : products ? (
            <>
              {products.map((product) => (
                <React.Fragment key={product.id}>
                  <Product_comp {...product} />
                </React.Fragment>
              ))}
            </>
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </>
  );
}
export default Productpage;
