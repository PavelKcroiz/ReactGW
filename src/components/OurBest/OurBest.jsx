import React from "react";
import OurBestItem from "../OurBestItem";
import { Link } from "react-router-dom";
import "./style.css";

const OurBest = (props) => {
  const { bestsellers, getCoffeeId } = props;

  return (
    <div className="our_best">
      <h1>Our best</h1>
      <ul>
        {bestsellers.map((title, num) => (
          <Link key={num} to={`/coffee/:${getCoffeeId(title)}`}>
            <OurBestItem title={title} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default OurBest;
