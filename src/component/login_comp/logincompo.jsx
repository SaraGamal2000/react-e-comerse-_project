import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function MyFormLogin() {
  const [info, setinfo] = useState({ email: "", password: "" });
  const [error, seterror] = useState({ emailerr: "", passworderr: "" });
  // const [info, setinfo] = useState({
  //   name: "",
  //   email: "",
  //   usernam: "",
  //   password: "",
  // });
  // const [error, seterror] = useState({
  //   nameerr: "",
  //   emailerr: "",
  //   usernamerr: "",
  //   passworderr: "",
  // });

  const HandelForm = (e) => {
    setinfo({
      ...info,
      [e.target.name]: e.target.value,
    });

    if (e.target.name == "email") {
      setinfo({
        ...info,
        email: e.target.value,
      });
      console.log(e.target.value);
      console.log("email", info.email, "password", info.password);

      seterror({
        ...error,
        emailerr: e.target.value.length == 0 && "this field is required",
      });
    } else {
      setinfo({
        ...info,
        password: e.target.value,
      });
      console.log(e.target.value);
      console.log("email", info.email, "password", info.password);

      seterror({
        ...error,
        passworderr: e.target.value.length == 0 && "this field is required",
      });
    }
  };
  const HandelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card
      className=" container w-25   mt-5 pb-2 pt-2 shadow"
      style={{ height: "430px", position: "relative", top: "100px" }}
    >
      <h1
        style={{
          fontFamily: "cursive, Helvetica, sans-serif",
          textAlign: "center",
          margin: "3px",
          fontWeight: "bolder",
        }}
      >
        Login_page
      </h1>
      <Form className=" m-3  " onSubmit={(e) => HandelSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={info.email}
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(e) => HandelForm(e)}
          />
        </Form.Group>
        <p className="text-danger">{error.emailerr}</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={info.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => HandelForm(e)}
          />
        </Form.Group>
        <p className="text-danger">{error.passworderr}</p>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button className="w-75 ms-5 pe-3 " variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
export default MyFormLogin;
