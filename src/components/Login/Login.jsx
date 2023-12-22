import React from "react";
import { json } from "react-router";
import { useRef, useState, useEffect } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";


const LOGIN_URL = "/auth";
export default function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        json.stringify({ user, pwd }),
        {
          Headers: {
            "Content-Type": "application/json",
          },
          withCredntials: true,
        }
      );
      console.log(json.stringify(response?.data));
      setAuth({ user, pwd, accessToken });

      setUser("");
      setPwd("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1> You Have Successfully Logged in!</h1>
          <br />
          <p>
            {" "}
            <a href="#"> Go To Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            ></input>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            ></input>
            <button type="submit">Sign In</button>
          </form>
          <p>
            {" "}
            Not Register? Sign up !! <br />
            <span className="line">
              {<Link to="/Register">Sign Up!!!</Link>}
            </span>
          </p>
        </section>
      )}
    </>
  );
}
