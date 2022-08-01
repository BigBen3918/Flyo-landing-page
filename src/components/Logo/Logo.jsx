import React from "react";
import "./css/Logo.css";

function Logo(props) {
  let img;
  if (props.dark) {
    img = "image-dark-theme/logo.svg";
  } else {
    img = "image-light-theme/logo.svg";
  }

  return (
    <picture className="logo">
      <a href="/">
        <img src={img} alt="logo of website" />
      </a>
    </picture>
  );
}

export default Logo;
