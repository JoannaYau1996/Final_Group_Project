import { useState } from "react";
import { Navigate } from "react-router-dom";
import Test from "./Test";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const logged = false;

  const handleLogin = () => {
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      logged(true);
      localStorage.setItem("loggedin", true);
      Navigate("/post");
    } else {
      alert("email or password incorrect");
    }
  };
  return (
    <div>
      {logged && <Test />}

      {!logged && (
        <form onSubmit={handleLogin}>
          <div className="form-outline mb-4">
            <h2>Login</h2>
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
            <button type="submit">Login</button>
          </div>

          <p>No account?</p>
          <a href="/Register">
            <u>Register here</u>
          </a>
        </form>
      )}
    </div>
  );
}

export default Login;
