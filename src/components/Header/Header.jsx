import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  return (
    <ul className="app-header">
      <li className="coffee">
        <img src="/images/coffee2.png" alt="coffee2" />
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
  );
};

export default Header;
