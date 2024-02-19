import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ token, setToken }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.username) {
      setUsername(userData.username);
    }
  }, []);

  const loginHandler = async () => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    setError("");
    setPassword("");

    if (storedUserData) {
      try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "mor_2314",
            password: "83r5^_",
          }),
        });

        if (response.ok) {
          const result = await response.json();
          setToken(result.token);
          Navigate("/");
        } else {
          setError("Invalid username or password");
        }
      } catch (error) {
        console.error("Login error:", error.message);
        setError("An unexpected error occurred. Please try again.");
      }
    } else {
      setError("User not registered");
    }
  };

  return (
    <>
      <h2 className="Welcome">Welcome To The Super Store...</h2>

      <section>
        <h1>Sign In</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
          }}
        >
          <label htmlFor="username">Username</label>
          <input
            className="username"
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={userName}
            placeholder="UserName"
          ></input>

          <label htmlFor="password">Password</label>
          <input
            className="password"
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          ></input>
          {error && (
            <small>
              ("Your Username and Password combination is incorrect")
            </small>
          )}
          <button type="submit" onClick={loginHandler}>
            Login
          </button>
        </form>
        <p className="notReg">
          Not Register? <br />
          <span className="line">
            <Link to="/Register">Sign Up!!!</Link>
          </span>
        </p>
      </section>
    </>
  );
};

export default Login;
