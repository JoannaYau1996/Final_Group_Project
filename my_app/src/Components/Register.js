import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="container-fluid text-center w-50">
      <h2>Create an account</h2>

      <form onSubmit={handleSubmitRegister}>
        <div className="form-outline mb-4">
          <label className="form-lable " htmlFor="form3Example1cg">
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
          <label className="form-lable" htmlFor="form3Example3cg">
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
          <label className="form-lable" htmlFor="form3Example4cg">
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

        <div>
          <button type="submit">Register</button>
        </div>

        <p>Have already an account?</p>
        <a href="/login">
          <u>Login here</u>
        </a>
      </form>
    </div>
  );
}

export default Register;
