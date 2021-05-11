import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav--black"} `}>
      <div className="nav__contents">
        <img
          onClick={() => {
            history.push("/");
          }}
          className="nav__logo"
          src="https://webbilim.com/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt="logo"
        />
        <img
          onClick={() => {
            history.push("/profile");
          }}
          className="nav__avatar"
          src="https://i.pinimg.com/736x/d2/b0/bf/d2b0bf0b5b31b1d36c7edfcaa93ff98c.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
