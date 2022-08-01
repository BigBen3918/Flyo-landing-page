import React from "react";
import "./css/Header.css";
import Logo from "../Logo/Logo";
import DarkThemeSwitchBtn from "../Dark-Theme-Switch-Btn/DarkThemeSwitchBtn";
import Nav from "../Nav/Nav";

function Header(props) {
  let headerBg;
  if (props.isdarkThemeActive) {
    headerBg = "header-wrapper header-wrapper-active";
  } else {
    headerBg = "header-wrapper";
  }

  return (
    <div className="header-fixed">
      <div className={headerBg}>
        <header className="header container">
          <Logo dark={props.isdarkThemeActive} />
          <DarkThemeSwitchBtn
            dark={props.isdarkThemeActive}
            changeTheme={props.switchActiveTheme}
          />
          <Nav dark={props.isdarkThemeActive} />
        </header>
      </div>
    </div>
  );
}

export default Header;
