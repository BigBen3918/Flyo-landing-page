import React from "react";
import "./css/Footer.css";

export default function Footer(props) {
  return (
    <div
      className={
        props.isdarkThemeActive
          ? "Footer-wrapper Footer-wrapper-dark"
          : "Footer-wrapper"
      }
    >
      <div className="Footer">
        <div className="Footer-aboutText">
          <p className="aboutText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="Footer-details">
          <p className="details-phone">
            <img src="images/phone-icon.svg" alt="phone icon" /> +1-543-123-4567
          </p>
          <p className="details-email">
            <img src="images/email-icon.svg" alt="email icon" />{" "}
            example@fylo.com
          </p>
          <p className="details-location">
            <img src="images/location-icon.svg" alt="location icon" /> example,
            example
          </p>
        </div>
        <div className="Footer-links">
          <a href="#" className="Footer-link-item">
            About us
          </a>
          <a href="#" className="Footer-link-item">
            Jobs
          </a>
          <a href="#" className="Footer-link-item">
            Press
          </a>
          <a href="#" className="Footer-link-item">
            Blog
          </a>
        </div>
        <div className="Footer-links">
          <a href="#" className="Footer-link-item">
            Contact us
          </a>
          <a href="#" className="Footer-link-item">
            Terms
          </a>
          <a href="#" className="Footer-link-item">
            Privacy
          </a>
        </div>
        <div className="Footer-socialLinks">
          <span
            className={
              props.isdarkThemeActive
                ? "Footer-socialLink Footer-socialLink-dark"
                : "Footer-socialLink"
            }
          >
            <i className="fab fa-facebook-f"></i>
          </span>
          <span
            className={
              props.isdarkThemeActive
                ? "Footer-socialLink Footer-socialLink-dark"
                : "Footer-socialLink"
            }
          >
            <i className="fab fa-twitter"></i>
          </span>
          <span
            className={
              props.isdarkThemeActive
                ? "Footer-socialLink Footer-socialLink-dark"
                : "Footer-socialLink"
            }
          >
            <i className="fab fa-instagram"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
