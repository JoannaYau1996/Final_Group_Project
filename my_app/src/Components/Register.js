import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  //  to store value in localstorage

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div className="container-fluid text-start green logincontainer w-50 py-5">
      <h2 className="d-flex justify-content-center p-3 ">Create an account</h2>

      <form onSubmit={handleSubmitRegister}>
        <div className="">
          <div className="form-outline mb-4">
            <label
              className="form-lable green fw-bold"
              htmlFor="form3Example1cg"
            >
              Your Name
            </label>
            <input
              required
              minlength="3"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="text"
              id="form3Example1cg"
              className="form-control form-control-lg "
            />
          </div>
          <div className="form-outline mb-4">
            <label
              className="form-lable green fw-bold"
              htmlFor="form3Example3cg"
            >
              Your Email
            </label>
            <input
              required
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="email"
              id="form3Example3cg"
              className="form-control form-control-lg "
            />
          </div>

          <div className="form-outline mb-4">
            <label
              className="form-lable green fw-bold"
              htmlFor="form3Example4cg"
            >
              Password
            </label>
            <input
              required
              minlength="4"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="password"
              id="form3Example4cg"
              className="form-control form-control-lg"
            />
          </div>

          <Button
            type="submit"
            className="bg-dark green fw-bold p-1 border border-info rounded"
          >
            Register
          </Button>
          <hr />
          <div className=" d-flex">
            <p>Have already an account?</p>
            <Link
              to="/login"
              className="d4d4 register_link ms-2 fw-bold text-decoration-none"
            >
              Login here
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
