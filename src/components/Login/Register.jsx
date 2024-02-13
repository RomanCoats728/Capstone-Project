import React, { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
import "./Log.Reg.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const password_REGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
  const userRef = useRef();
  const errRef = useRef();
  const [userName, setUserName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setpassword] = useState("");
  const [validpassword, setValidpassword] = useState(false);
  const [passwordFocus, setpasswordFocus] = useState(false);

  const [matchpassword, setMatchpassword] = useState("");
  const [validMatch, setValidMAtch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(userName);
    setValidName(result);
  }, [userName]);

  useEffect(() => {
    const result = password_REGX.test(password);
    setValidpassword(result);
    const match = password === matchpassword;
    setValidMAtch(match);
  }, [password, matchpassword]);

  useEffect(() => {
    setErrMsg("");
  }, [userName, password, matchpassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted")
    setSuccess(true);
  };
  useEffect(() => {
    console.log("validName:", validName);
  }, [validName]);

  useEffect(() => {
    console.log("validpassword:", validpassword);
  }, [validpassword]);

  useEffect(() => {
    console.log("validMatch:", validMatch);
  }, [validMatch]);

  const RegHandler = async () => {
    try {
      console.log(RegHandler);
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });

      const res = await response.json();
      console.log(res);

      if (response.ok) {
        localStorage.setItem(
          "UserData",
          JSON.stringify({ username: userName, password: password })
        );
        setSuccess(true);
      } else {
        setErrMsg("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error.message);
      setErrMsg("An unexpected error occurred. Please try again.");
    }
    console.log("Registration Response:", res);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/">Sign In!!!</Link>
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
          <h1>Register!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">
              Username:
              <span className={validName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />{" "}
              </span>
              <span className={validName || !userName ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />{" "}
              </span>
            </label>
            <input
              type="text"
              id="userName"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUserName(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && userName && !validName
                  ? "instruction"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 Characters.
              <br />
              must begain with a letter.
              <br />
              letters,numbers,underscores,hyphends allowe
            </p>

            <label htmlFor="password">
              Password:
              <span className={validpassword ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validpassword || !password ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="passwordnote"
              onFocus={() => setpasswordFocus(true)}
              onBlur={() => setpasswordFocus(false)}
            />

            <p
              id="passwordnote"
              className={
                passwordFocus && !validpassword ? "instruction" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 Characters.
              <br />
              Must include uppercase and lowercase letter, a number and a
              special character.
              <br />
              Allowed special characters:
              <span aria-label="exclamation mark">!</span>
              <span aria-label=" at Symbol">@</span>
              <span aria-label="hashtags">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="confirm_password">
              Confirm Password:
              <span className={validMatch && matchpassword ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={validMatch || !matchpassword ? "hide" : "invalid"}
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="password"
              id="confirm_password"
              onChange={(e) => setMatchpassword(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} /> Must match the first
              Password input field.
            </p>
            <button disabled={!validName || !validpassword || !validMatch}>
              Sign Up
            </button>
          </form>
          <p>
            Already Registered?
            <br />
            <span className="line">{<Link to="/">Login!!</Link>}</span>
          </p>
        </section>
      )}
    </>
  );
}
