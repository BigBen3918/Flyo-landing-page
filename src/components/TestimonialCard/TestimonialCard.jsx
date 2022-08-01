import React from "react";
import "./css/TestimonialCard.css";

export default function TestimonialCard(props) {
  return (
    <div
      className={
        props.isdarkThemeActive
          ? "TestimonialCard TestimonialCard-dark"
          : "TestimonialCard"
      }
    >
      <p className="TestimonialMsg">{props.testimonialMsg}</p>
      <div className="Testimonial-profile">
        <img
          className="profile-img"
          src={props.profileImg}
          alt="testimonial profile image"
        />
        <div>
          <p className="profile-name">{props.profileName}</p>
          <p className="profile-position">{props.profilePosition}</p>
        </div>
      </div>
    </div>
  );
}
