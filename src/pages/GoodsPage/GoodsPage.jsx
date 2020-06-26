import React from "react";
import HeadPage3 from "../../components/HeadPage3";
import ForYourPleasure from "../../components/ForYourPleasure";
import GoodsList from "../../components/GoodsList";

const GoodsPage = (props) => {
  const { goods } = props;
  return (
    <>
      <HeadPage3 />
      <ForYourPleasure />
      <GoodsList goods={goods} />
    </>
  );
};

export default GoodsPage;
