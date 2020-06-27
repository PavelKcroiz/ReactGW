import React from "react";

const CoffeeListItem = (props) => {
  const { title } = props;

  return (
    <li>
      <img src={title.url} />
      <p>{title.name}</p>
      <p>{title.country}</p>
      <span>{title.price}</span>
    </li>
  );
};

export default CoffeeListItem;
