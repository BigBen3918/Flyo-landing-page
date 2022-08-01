import React from "react";
import "./css/HowItWorks.css";
import Picture from "../Picture/Picture";
import Article from "../Article/Article";

export default function HowItWorks(props) {
  return (
    <div
      className={
        props.isdarkThemeActive
          ? "HowItWorks-wrapper-dark"
          : "HowItWorks-wrapper"
      }
    >
      <div className="HowItWorks">
        <Picture
          isdarkThemeActive={props.isdarkThemeActive}
          imgName="cloud-working-illustration.svg"
        />
        <div className="howItWorks-article-wrapper">
          <Article
            section="howItWorks"
            isdarkThemeActive={props.isdarkThemeActive}
            headingType="heading"
            heading="Stay productive, wherever you are"
            paragraph={[
              "Never let location be an issue when accessing your files. Fylo has you covered for all of your file  storage needs.",
              "Securely share files and folders with friends, family and colleagues for live collaboration. No email  attachments required.",
            ]}
          />
          <a
            className={
              props.isdarkThemeActive ? "seeHowItWorks-dark" : "seeHowItWorks"
            }
            href="#"
          >
            See how it works{" "}
            <img
              src={
                props.isdarkThemeActive
                  ? "image-dark-theme/arrow-icon.svg"
                  : "image-light-theme/arrow-icon.svg"
              }
              alt="arrow icon - see how it works"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
