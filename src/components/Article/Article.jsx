import React from "react";
import "./css/Article.css";

export default function Article(props) {
  function renderParagraph(p, index) {
    return (
      <p
        className={
          props.headingType === "sub-heading"
            ? "paragraph paragraph-center"
            : "paragraph"
        }
        key={index}
      >
        {p}
      </p>
    );
  }

  return (
    <div
      className={
        props.headingType === "sub-heading"
          ? "article-wrapper"
          : `article-wrapper article-wrapper-${props.section}`
      }
    >
      <h1
        className={
          props.isdarkThemeActive
            ? `${props.headingType} ${props.headingType}-dark`
            : `${props.headingType}`
        }
      >
        {props.heading}
      </h1>
      {props.paragraph.map(renderParagraph)}
    </div>
  );
}
