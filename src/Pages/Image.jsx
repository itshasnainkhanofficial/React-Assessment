import React, { useContext, useEffect, useState } from "react";
import {
  RiAddCircleLine,
  RiHeartFill,
  RiHeartLine,
  RiShoppingCartFill,
} from "react-icons/ri";
import styles from "./styles/image.module.css";
import { Context } from "../state/Context";
import PropTypes from "prop-types";

const Image = ({ className, ImgData }) => { 
  const [inCart, setInCart] = useState(false);
  const { toggleFavorite, addToCart, cartItems, setCartItems } = useContext(Context);
  const [hovered, setHovered] = useState(false);

  useEffect(() => { // this effect will run every time when cartitem array change means add or delete item to track the cart icon
    const isInCart = cartItems.find((item) => item.id === ImgData.id);
    if (isInCart) {
      setInCart(true);
    }
  }, [cartItems]);

  const onMouseEnterHandler = () => {
    setHovered(true);
  };

  const onMouseLeaveHandler = () => {
    setHovered(false);
  };


  // this function is to set item in cart and render appropriate cart icon
  const clickHandler = (data) => {
    const isInCart = cartItems.find((item) => item.id === data.id);
    if (isInCart) {
      setInCart(false);
      setCartItems((prev) => prev.filter((item) => item.id !== data.id));
    } else {
      setInCart(true);
      addToCart(data);
    }
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div onClick={() => toggleFavorite(ImgData.id)}> {/* favorite icon*/}
        {ImgData.isFavorite ? (
          <RiHeartFill />
        ) : hovered ? (
          <RiHeartLine />
        ) : null}
      </div>

      <div onClick={() => clickHandler(ImgData)}> {/* cart icon*/}
        {inCart ? (
          <RiShoppingCartFill />
        ) : hovered ? (
          <RiAddCircleLine />
        ) : null}
      </div>

      <img src={ImgData.url} />
    </div>
  );
};


// type checking for props
Image.propTypes = {
  className: PropTypes.string,
  ImgData: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
