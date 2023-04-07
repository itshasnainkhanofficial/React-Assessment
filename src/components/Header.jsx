import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import styles from './styles/header.module.css'
import { Context } from "../state/Context";


const Header = () => {
  const { cartItems} = useContext(Context);

  return (
    <div className={styles.container}>
      
      <Link to="/">Pic Some</Link>

      <Link to="/cart">
        {cartItems.length > 0 ? <RiShoppingCartFill className="ri-fw ri-2x"/> : <RiShoppingCartLine className="ri-fw ri-2x"/>}
      </Link>
    </div>
  );
};

export default Header;
