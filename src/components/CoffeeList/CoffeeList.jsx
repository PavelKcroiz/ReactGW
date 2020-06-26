import React from "react";
import CoffeeListItem from "../CoffeeListItem";
import { Link } from "react-router-dom";
import "./style.css";

const CoffeeList = (props) => {
  const { visibleCoffee, coffeeItem } = props;

  return (
    <ul className="coffee_list">
      {visibleCoffee.map((title, index) => (
        <Link to={`/coffee/${index}`}>
          <CoffeeListItem
            title={title}
            coffeeItem={coffeeItem}
            key={index}
          />
        </Link>
      ))}
    </ul>
  );
};

export default CoffeeList;
