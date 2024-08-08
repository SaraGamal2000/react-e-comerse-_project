import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "../component/navbar/Nav";
// {
//   /* <Suspense fallback={<h3>Loading...</h3>}> */
// }
const Homepage = lazy(() => import("../pages/home/homepage"));
const Loginpage = lazy(() => import("./../pages/loginpage"));
const Productpage = lazy(() => import("../pages/products/productpage"));
const Register = lazy(() => import("../pages/registerpage"));
const Cartpage = lazy(() => import("./../pages/cartpage"));
const P_detail = lazy(() => import("./../pages/products/p_detail"));
export default function AppRoute() {
  return (
    <>
      <Suspense>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<Loginpage />}></Route>
            <Route path="/product" element={<Productpage />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/cart" element={<Cartpage />}></Route>
            <Route
              path="/detail/:id"
              element={<P_detail />}
              // component={P_detail}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
