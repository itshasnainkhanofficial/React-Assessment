import React, { useContext, useState } from "react";
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
  const [hovered, setHovered] = useState(false);

  const { toggleFavorite } = useContext(Context);

  const { setCartltems, cartltems } = useContext(Context);

  const onMouseEnterHandler = () => {
    if (!ImgData.isFavorite) {
      setHovered(true);
    }
  };

  const onMouseLeaveHandler = () => {
    setHovered(false);
  };

  const clickHandler = (data) => {
    cartltems.push(data);

    console.log(cartltems);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div onClick={() => toggleFavorite(ImgData.id)}>
        {ImgData.isFavorite ? ( <RiHeartFill /> ) : (<RiHeartLine /> )}
      </div>

      <div>
        {hovered ? (
          <RiAddCircleLine onClick={() => clickHandler(ImgData)} />
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
