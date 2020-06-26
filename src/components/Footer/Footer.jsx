import React from "react";

import "./style.css";

const Footer = () => {
  return (
    <>
      <ul className="app-footer">
        <li className="coffeeB">
          <img src="/images/coffee2b.png" alt="coffee2" />
        </li>
        <li>Coffee house</li>
        <li>Our coffee</li>
        <li>For your pleasure</li>
      </ul>

      <div className="line">
        <hr></hr>
        <img src="/images/coffee3b.png" alt="coffee3b" />
        <hr></hr>
      </div>
    </>
  );
};

export default Footer;
