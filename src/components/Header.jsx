import React from "react";
import { Link } from "react-router-dom";
import {FiShoppingCart} from 'react-icons/Fi'
// import {useContext} from 'react'
// import {Context} from '../state/Context'

const Header = () => {

    // const photos = useContext(Context)

  return (
    <div>
        {/* <h1>name: {Photos[0]}</h1> */}
      <Link to="/">Pic Some</Link>
      <Link to="/cart">
        <FiShoppingCart />
      </Link>
    </div>
  );
};

export default Header;
