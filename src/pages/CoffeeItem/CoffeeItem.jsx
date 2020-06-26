import React from "react";
import HeadPage2 from "../../components/HeadPage2";
import AboutItem from "../../components/AboutItem";

const CoffeePage = (props) => {
  const { id } = props;

  return (
    <>
      <HeadPage2 />
      <AboutItem id={id} />
    </>
  );
};

export default CoffeePage;
