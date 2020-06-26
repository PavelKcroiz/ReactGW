import React from "react";
import HeadPage2 from "../../components/HeadPage2";
import AboutOurBeans from "../../components/AboutOurBeans";
import CoffeeList from "../../components/CoffeeList";
import SearchAndFilter from "../../components/SearchAndFilter";

const CoffeePage = (props) => {
  const { getFilter, visibleCoffee, coffeeItem, searchFunc } = props;
  return (
    <>
      <HeadPage2 />
      <AboutOurBeans />
      <SearchAndFilter getFilter={getFilter} searchFunc={searchFunc} />
      <CoffeeList visibleCoffee={visibleCoffee} coffeeItem={coffeeItem} />
    </>
  );
};

export default CoffeePage;
