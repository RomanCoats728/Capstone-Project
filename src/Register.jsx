
import { useRef, useState, useEffect } from "react";
import { Form } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errREf = useRef();
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(fales);

  const [pwd, setpwd] = useState("");
  const [validpwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(fales);

  const [matchPwd, setMatchPWD] = useState("");
  const [validMatch, setValidMAtch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(fales);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
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
          <Form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <span className={validName ? "valid" : "hide"}>
                <fontAwesomeIcon icon={faCheck} />{" "}
              </span>
              <span className={validName || !user ? "hide" : "invalid"}>
                <fontAwesomeIcon icon={faTimes} />{" "}
              </span>
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instruction" : "offscreen"
              }
            >
              <fontAwesomeIcon icon={faInfoCircle} />
              4 to 24 Characters.
              <br />
              must begain with a letter.
              <br />
              letters,numbers,underscores,hyphends allowe
            </p>

            <label htmlFor="password">
              Password:
              <span className={validName ? "valid" : "hide"}>
                <fontAwesomeIcon icon={faCheck} />{" "}
              </span>
              <span className={validName || !user ? "hide" : "invalid"}>
                <fontAwesomeIcon icon={faTimes} />{" "}
              </span>
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setpwd(e.target.value)}
              required
              aria-invalid={validpwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />

            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instruction" : "offscreen"}
            >
              <fontAwesomeIcon icon={faInfoCircle} />
              8 to 24 Characters.
              <br />
              Must include uppercase and lowercase letter, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>
              <span aria-label=" at Symbol">@</span>{" "}
              <span aria-label="hashtags">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="comfirm_pwd">
              Confirm Password:
              <span className={validMatch && matchPwd ? "valid" : "hide"}>
                {" "}
                <fontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                {" "}
                <fontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="password"
              id="confime_pwd"
              onChange={(e) => setMatchPWD(e.target.value)}
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
              <fontAwesomeIcon icon={faInfoCircle} /> Must match the first
              Password input field.
            </p>
            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </Form>
          <p>
            Already Registered?
            <br />
            <span className="line">
              {/* put router link here
              <a href="#">Sign in</a> */}
            </span>
          </p>
        </section>
      )}
      </>
  );
};

export default Register;


