import React from "react";

import "./style.css";

const AboutItem = (props) => {
  const { id } = props;
  const data = require("../../db.json");
  const item = data.coffee[id];
  console.log(item);

  return (
    <div className="about_item">
      <img src={item.url} />
      <div className="text">
        <h2>About it </h2>
        <div className="line">
          <hr></hr>
          <img src="/images/coffee3b.png" alt="coffee3b" />
          <hr></hr>
        </div>
        <p>
          <span>Country: </span>
          {item.country}
        </p>
        <p>
          <span>Description: </span>
          {item.description}
        </p>
        <p className="price">
          <span>Price: </span>
          {item.price}
        </p>
      </div>
    </div>
  );
};

export default AboutItem;
