import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Feature from "./Feature/Feature";
import HowItWorks from "./how-it-works/HowItWorks";
import Testimonial from "./Testimonial/Testimonial";
import GetStarted from "./GetStarted/GetStarted";
import Footer from "./Footer/Footer";

function App() {
  // initially lite theme is active
  let [darkThemeActive, setDarkThemeActive] = useState(false);

  function switchActiveTheme() {
    if (darkThemeActive) {
      setDarkThemeActive(false);
      document.querySelector("#root").style.backgroundColor = "white";
    } else {
      setDarkThemeActive(true);
      document.querySelector("#root").style.backgroundColor = "#1C2431";
    }
  }

  useEffect(() => {
    let headerFixedContainer = document.querySelector(".header-fixed");
    let headerHeight = headerFixedContainer.clientHeight;
    document.querySelector(".Hero-wrapper").style.paddingTop = `${
      headerHeight + 20
    }px`;

    let lastScrolled = 0;

    window.addEventListener("scroll", () => {
      let scrolled = document.documentElement.scrollTop;
      if (scrolled > lastScrolled) {
        headerFixedContainer.style.top = `-${headerHeight + 40}px`;
      } else {
        headerFixedContainer.style.top = "0";
      }
      lastScrolled = scrolled;
    });
  });

  return (
    <div>
      <Header
        isdarkThemeActive={darkThemeActive}
        switchActiveTheme={switchActiveTheme}
      />
      <Hero isdarkThemeActive={darkThemeActive} />
      <Feature isdarkThemeActive={darkThemeActive} />
      <HowItWorks isdarkThemeActive={darkThemeActive} />
      <Testimonial isdarkThemeActive={darkThemeActive} />
      <GetStarted isdarkThemeActive={darkThemeActive} />
      <Footer isdarkThemeActive={darkThemeActive} />
    </div>
  );
}

export default App;
