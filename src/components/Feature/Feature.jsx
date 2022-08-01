import React from "react";
import "./css/Feature.css";
import Article from "../Article/Article";
import Picture from "../Picture/Picture";
import featureData from "./featureData";

export default function Feature(props) {
  function generateCard(cardData) {
    return (
      <div key={cardData.id} className="feature-item">
        <Picture
          imgType="sm"
          imgName={cardData.img}
          isdarkThemeActive={props.isdarkThemeActive}
        />
        <Article
          headingType="sub-heading"
          heading={cardData.heading}
          paragraph={[cardData.paragraph]}
          isdarkThemeActive={props.isdarkThemeActive}
        />
      </div>
    );
  }

  return (
    <div
      className={
        props.isdarkThemeActive ? "feature-wrapper-dark" : "feature-wrapper"
      }
    >
      <div className="feature">{featureData.map(generateCard)}</div>
    </div>
  );
}
