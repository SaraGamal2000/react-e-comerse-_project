import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function MyRegister() {
  const [info, setinfo] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    r_password: "",
  });
  const [error, seterror] = useState({
    nameerr: "",
    emailerr: "",
    usernamerr: "",
    passworderr: "",
    r_passworderr: "",
  });
  const [matcherr, setmatcherr] = useState({ r_passwordmatch: "" });

  const validateusername = (username) => {
    const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])\S+$/;
    return emailRegex.test(username);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const HandelForm = (e) => {
    if (e.target.name == "fullname") {
      setinfo({
        ...info,
        name: e.target.value,
      });

      seterror({
        ...error,
        nameerr: e.target.value.length == 0 && "this field is required",
      });
    } else if (e.target.name == "email") {
      setinfo({
        ...info,
        email: e.target.value,
      });

      seterror({
        ...error,
        emailerr:
          e.target.value.length == 0
            ? "this field is required"
            : !validateEmail(e.target.value)
            ? "invalid Email"
            : "",
      });
    } else if (e.target.name == "user") {
      setinfo({
        ...info,
        username: e.target.value,
      });

      seterror({
        ...error,
        usernamerr:
          e.target.value.length == 0
            ? "this field is required"
            : !validateusername(e.target.value)
            ? "invalid username must contain at least one lowercase letter is present,at least one uppercase letter is present and no space"
            : "",
      });
    } else if (e.target.name == "password") {
      setinfo({
        ...info,
        password: e.target.value,
      });

      seterror({
        ...error,
        passworderr:
          e.target.value.length == 0
            ? "this field is required"
            : !validatePassword(e.target.value)
            ? "Password must be at least 8 characters long, contain one uppercase, one lowercase, one number, and one special character"
            : "",
      });
    } else {
      setinfo({
        ...info,
        r_password: e.target.value,
      });
      seterror({
        ...error,
        r_passworderr: e.target.value.length == 0 && "this field is required",
      });
      setmatcherr({
        ...matcherr,
        r_passwordmatch:
          e.target.value != info.password && "this password don't match",
      });
    }
  };
  const HandelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Card
        className=" container w-25    pb-2 pt-2 shadow"
        style={{ height: "800px", position: "relative", top: "30px" }}
      >
        <h1
          style={{
            fontFamily: "cursive, Helvetica, sans-serif",
            textAlign: "center",
            margin: "3px",
            fontWeight: "bolder",
          }}
        >
          Registeration_page
        </h1>
        <Form className=" m-3  " onSubmit={(e) => HandelSubmit(e)}>
          <Form.Group className="mb-3 m-2 mt-2" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={info.name}
              type="text"
              name="fullname"
              placeholder="Enter name"
              onChange={(e) => HandelForm(e)}
            />
          </Form.Group>
          <p className="text-danger">{error.nameerr}</p>

          <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
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

          <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={info.username}
              type="text"
              name="user"
              placeholder="Enter email"
              onChange={(e) => HandelForm(e)}
            />
          </Form.Group>
          <p className="text-danger">{error.usernamerr}</p>

          <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
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

          <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
            <Form.Label>Reapet Password</Form.Label>
            <Form.Control
              value={info.r_password}
              type="password"
              name="r_password"
              placeholder="Password"
              onChange={(e) => HandelForm(e)}
            />
          </Form.Group>
          <p className="text-danger">{error.r_passworderr}</p>
          <p className="text-danger">{matcherr.r_passwordmatch}</p>

          <Form.Group className="mb-3 m-2 " controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button className="w-75 ms-5 pe-3 " variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
}
export default MyRegister;
