import React from "react";
import "./css/GetStarted.css";
import Form from "../Form/Form";

export default function GetStarted(props) {
  return (
    <div
      className={
        props.isdarkThemeActive
          ? "GetStarted-wrapper GetStarted-wrapper-dark"
          : "GetStarted-wrapper"
      }
    >
      <div
        className={
          props.isdarkThemeActive ? "GetStarted GetStarted-dark" : "GetStarted"
        }
      >
        <h2
          className={
            props.isdarkThemeActive
              ? "GetStarted-heading GetStarted-heading-dark"
              : "GetStarted-heading"
          }
        >
          Get early access today
        </h2>
        <p className="GetStarted-text">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <Form
          buttonValue="Get started for free"
          isdarkThemeActive={props.isdarkThemeActive}
        />
      </div>
    </div>
  );
}
