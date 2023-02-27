import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
    <>
      <h2>Create an account</h2>

      <form onSubmit={handleSubmitRegister}>
        <div className="form-outline mb-4">
          <input
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="text"
            id="form3Example1cg"
            className="form-control form-control-lg"
          />
          <label className="form-lable" htmlFor="form3Example1cg">
            Your Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="email"
            id="form3Example3cg"
            className="form-control form-control-lg"
          />
          <label className="form-lable" htmlFor="form3Example3cg">
            Your Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="password"
            id="form3Example4cg"
            className="form-control form-control-lg"
          />
          <label className="form-lable" htmlFor="form3Example4cg">
            Password
          </label>
        </div>

        <div>
          <button type="submit">Register</button>
        </div>

        <p>Have already an account?</p>
        <Link to="/login">
          <u>Login here</u>
        </Link>
      </form>
    </>
  );
}

export default Register;
