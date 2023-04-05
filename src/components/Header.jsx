import React from "react";
import { Link } from "react-router-dom";
import {FiShoppingCart} from 'react-icons/Fi'

const Header = () => {
  return (
    <div>
      <Link to="/">Pic Some</Link>
      <Link to="/cart">
        <FiShoppingCart />
      </Link>
    </div>
  );
};

export default Header;
