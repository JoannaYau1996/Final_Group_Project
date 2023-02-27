import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Login.css";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      Navigate("/");
    } else {
      alert("email or password incorrect");
    }
  };
  return (
    <div className="container-fluid text-start green logincontainer">
      <h1 className="d4d4 fw-bold about-title text-center mt-5 py-5 display-5 ">
        {"< LogIn />"}
      </h1>
      <div className="container" style={{ maxWidth: "500px" }}>
        <Form onSubmit={handleLogin} style={{ maxWidth: "100%" }}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="green fw-bold">Your Email </Form.Label>
            <Form.Control
              type="email"
              name="email"
              className="rounded-0 name"
              style={{ background: "#d4d4d4" }}
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group className="my-5" controlId="password">
            <Form.Label className="green fw-bold">Password </Form.Label>
            <Form.Control
              type="password"
              name="password"
              className="rounded-0 name"
              style={{ background: "#d4d4d4" }}
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              required
            />
          </Form.Group>
          <Button type="submit" id="contactbtn" className="py-2 px-5">
            Login
          </Button>
          <p className="mt-5 text-center">
            No account?{" "}
            <Link
              to="/Register"
              className="d4d4 register_link ms-2 fw-bold text-decoration-none"
            >
              Register here
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
