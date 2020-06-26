import React from "react";
import HeadPage1 from "../../components/HeadPage1";
import AboutUs from "../../components/AboutUs";
import OurBest from "../../components/OurBest";

const MainPage = (props) => {
  const { bestsellers } = props;
  return (
    <div>
      <HeadPage1 />
      <AboutUs />
      <OurBest bestsellers={bestsellers} />
    </div>
  );
};

export default MainPage;
