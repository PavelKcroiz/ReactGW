import React from "react";

import "./style.css";

const HeadPage1 = () => {
  return (
    <div className="page1">
      <h1>Everything You Love About Coffee</h1>
      <div className="lineW">
        <hr></hr>
        <img src="/images/coffee3w.png" alt="coffee3w" />
        <hr></hr>
      </div>
      <p>We makes every day full of energy and taste</p>
      <p>Want to try our beans?</p>
      <a href="http://localhost:3000/">More</a>
    </div>
  );
};

export default HeadPage1;
