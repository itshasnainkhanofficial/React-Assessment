import { useContext, useEffect, useState } from "react";
import { Context } from "../state/Context";
import styles from "./styles/cart.module.css";
import { RiDeleteBin6Fill, RiDeleteBinFill, RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  const { addToCart, cartItems, setCartItems } = useContext(Context);
  const [isOrder, setiIsOrder] = useState(false)

  const [hovered, setHovered] = useState(false)

  const clickHandler = (data) => {
    const isInCart = cartItems.find((item) => item.id === data.id);
    if (isInCart) {
      setCartItems((prev) => prev.filter((item) => item.id !== data.id));
    } else {
      addToCart(data);
    }
  };


  const orderHandler = () => {
    setiIsOrder(true)

    setTimeout(() => {
      setCartItems([])
      setiIsOrder(false)
      console.log("order placed")
    }, 2000);

  }

  const enterHandler = () => {
    setHovered(true)
  }
  const leaveHandler = () => {
    setHovered(false)
  }

  return (
    <div className={styles.container}>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className={styles.itemContainer} >
           
            <div>$5.99</div>
            <div onClick={ () => clickHandler(item)} onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
              {hovered ? <RiDeleteBinFill/> : <RiDeleteBinLine /> }
            </div>
            <img src={item.url} />
          </div>
        ))
      ) : (
        <h1>No item found</h1>
      )}

      {cartItems.length > 0 ? (
        <div className={styles.total}>
          <p >
          Total Price: ${Math.round(cartItems.length * 5.99)}
        </p>
        <button className={styles.Cartbtn} onClick={orderHandler}>{isOrder ? "Ordering..." : "Place Order"}</button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
