import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/Fi";
import styles from './styles/header.module.css'


const Header = () => {


  return (
    <div className={styles.container}>
      
      <Link to="/">Pic Some</Link>

      <Link to="/cart">
        <FiShoppingCart />
      </Link>
    </div>
  );
};

export default Header;
