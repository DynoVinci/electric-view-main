import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../reducks/users/operations";
import Home from "../containers/Home";
import CrossX from "../assets/img/cross.png";
import Melodium from "../assets/img/Melodium.svg";
import { push } from "connected-react-router";

const Signin = () => {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(push("/"));
  };

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signInButton = () => {
    dispatch(signIn(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Home />
      <section class="popup">
        <div class="popup-inner">
          <div class="popup-preview">
            <div class="popup-inner">
              <span onClick={closeButton}>
                <img src={CrossX} class="close" />
              </span>
              <div class="input">
                <div class="Melodum">
                  <img src={Melodium} alt="" />
                  <p class="bold">Melodum</p>
                </div>
                <p class="bold2">SIGN IN</p>
                <input
                  type="email"
                  onChange={inputEmail}
                  required
                  placeholder="Email address"
                  value={email}
                />{" "}
                <br />
                <input
                  type="password"
                  onChange={inputPassword}
                  required
                  placeholder="Password"
                  vlaue={password}
                />
              </div>

              <button class="button" onClick={signInButton}>
                JOIN US
              </button>
              <p class="bottom">
                Already a Member?{" "}
                <a href="/signup">
                  <u>Join Us.</u>
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
