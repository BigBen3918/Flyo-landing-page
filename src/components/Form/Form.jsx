import React from "react";
import "./css/Form.css";

export default function Form(props) {
  return (
    <form action="/" className={props.hero ? "form form-margin-left" : "form"}>
      <input
        className={props.isdarkThemeActive ? "email email-dark" : "email"}
        type="email"
        name="email"
        placeholder="Enter your email..."
      />
      <input className="button" type="button" value={props.buttonValue} />
    </form>
  );
}
