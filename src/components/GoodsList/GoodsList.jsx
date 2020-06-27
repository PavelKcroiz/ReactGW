import React from "react";
import CoffeeListItem from "../CoffeeListItem";
import "./style.css";

const GoodsList = (props) => {
  const { goods } = props;

  return (
    <ul className="coffee_list">
      {goods.map((title, num) => (
        <CoffeeListItem key={num} title={title} />
      ))}
    </ul>
  );
};

export default GoodsList;
