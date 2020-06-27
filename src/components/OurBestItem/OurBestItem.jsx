import React from "react";
import "./style.css";

const OurBestItem = (props) => {
  const { title } = props;

  return (
    <li>
      <img src={title.url} />
      <p>{title.name}</p>
      <span>{title.price}</span>
    </li>
  );
};

export default OurBestItem;
