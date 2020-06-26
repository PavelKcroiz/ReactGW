import React from "react";
import OurBestItem from "../OurBestItem";
import "./style.css";

const OurBest = (props) => {
  const { bestsellers } = props;

  return (
    <div className="our_best">
      <h1>Our best</h1>
      <ul>
        {bestsellers.map((title, num) => (
          <OurBestItem key={num} title={title} />
        ))}
      </ul>
    </div>
  );
};

export default OurBest;
