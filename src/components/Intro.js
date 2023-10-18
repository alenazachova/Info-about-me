import logo from "../assets/me.jpg";

import React from "react";

function Intro() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Alena Zachová</h1>
      <h2>E-book creator & Frontend developer</h2>
      <p className="intro--website">
        <a href="alenazachova.github.io">alenazachova.github.io</a>
      </p>
    </header>
  );
}
export default Intro;
