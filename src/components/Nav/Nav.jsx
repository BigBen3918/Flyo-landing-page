import React, { useState } from "react";
import "./css/Nav.css";

function Nav(props) {
  let signInClass;
  let [navItemsClass, setNavItemsClass] = useState("nav-items");
  if (props.dark) {
    signInClass = "nav-item nav-item-active nav-item-active-dark";
  } else {
    signInClass = "nav-item nav-item-active";
  }

  function toggle() {
    const AnimatedBtnTop = document.querySelector(".AnimatedBtn-Top");
    const AnimatedBtnMiddle = document.querySelector(".AnimatedBtn-Middle");
    const AnimatedBtnBottom = document.querySelector(".AnimatedBtn-Bottom");
    AnimatedBtnTop.classList.toggle("AnimatedBtn-TopClick");
    AnimatedBtnMiddle.classList.toggle("AnimatedBtn-MiddleClick");
    AnimatedBtnBottom.classList.toggle("AnimatedBtn-BottomClick");
    navItemsClass === "nav-items"
      ? setNavItemsClass("nav-items nav-items-active")
      : setNavItemsClass("nav-items");
  }

  return (
    <nav className="nav">
      <div className={navItemsClass}>
        <a className="nav-item" href="#">
          Feature
        </a>
        <a className="nav-item" href="#">
          Team
        </a>
        <a className={signInClass} href="#">
          Sign In
        </a>
      </div>
      <div className="AnimatedBtn">
        <span className={"AnimatedBtn-Top"}></span>
        <span className="AnimatedBtn-Middle"></span>
        <span className="AnimatedBtn-Bottom"></span>
        <div className="AnimatedBtn-Cover" onClick={toggle}></div>
      </div>
    </nav>
  );
}

export default Nav;
