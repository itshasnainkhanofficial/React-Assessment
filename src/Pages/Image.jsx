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


  const onMouseEnterHandler = () => {
    setHovered(true);
  };

  const onMouseLeaveHandler = () => {
    setHovered(false);
  };

  useEffect(() => {
    const isInCart = cartItems.find((item) => item.id === ImgData.id);
    if (isInCart) {
      setInCart(true);
    }
  }, [cartItems]);

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
      <div onClick={() => toggleFavorite(ImgData.id)}>
        {ImgData.isFavorite ? (
          <RiHeartFill />
        ) : hovered ? (
          <RiHeartLine />
        ) : null}
      </div>

      <div onClick={() => clickHandler(ImgData)}>
        {/* {inCart ? <RiShoppingCartFill /> : <RiAddCircleLine />} */}
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

Image.propTypes = {
  className: PropTypes.string,

  ImgData: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
