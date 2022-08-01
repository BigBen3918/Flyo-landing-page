import React from "react";
import "./css/Testimonial.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import profileData from "./testimonialProfileData";

export default function Testimonial(props) {
  function generateCard(item) {
    return (
      <TestimonialCard
        key={item.id}
        isdarkThemeActive={props.isdarkThemeActive}
        testimonialMsg={item.msg}
        profileImg={item.img}
        profileName={item.name}
        profilePosition={item.position}
      />
    );
  }

  return (
    <div
      className={
        props.isdarkThemeActive
          ? "Testimonial-wrapper Testimonial-wrapper-dark"
          : "Testimonial-wrapper"
      }
    >
      <div
        className={
          props.isdarkThemeActive
            ? "Testimonial Testimonial-dark"
            : "Testimonial"
        }
      >
        {profileData.map(generateCard)}
      </div>
    </div>
  );
}
