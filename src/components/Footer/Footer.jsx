import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
  return (
    <>
      <ul className="app-footer">
        <li className="coffeeB">
          <img src="/images/coffee2b.png" alt="coffee2" />
        </li>
        <li>
          <Link to="/">Coffee house </Link>
        </li>
        <li>
          <Link to="/coffee">Our coffee </Link>
        </li>
        <li>
          <Link to="/goods">For your pleasure </Link>
        </li>
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
