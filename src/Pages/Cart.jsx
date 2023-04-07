import { useContext, useEffect, useState } from "react";
import { Context } from "../state/Context";
import styles from "./styles/cart.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Cart = () => {
  const { addToCart, cartItems, setCartItems } = useContext(Context);
  const [isOrder, setiIsOrder] = useState(false)
  const clickHandler = (data) => {
    const isInCart = cartItems.find((item) => item.id === data.id);
    if (isInCart) {
      setCartItems((prev) => prev.filter((item) => item.id !== data.id));
    } else {
      addToCart(data);
    }
  };

// useEffect(() => {
//   setiIsOrder()
 
// }, [isOrder])

  const orderHandler = () => {
    setiIsOrder(true)

    setTimeout(() => {
      setCartItems([])
      setiIsOrder(false)
      console.log("order placed")
    }, 2000);

  }

  return (
    <div className={styles.container}>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className={styles.itemContainer}>
           
            <div>$5.99</div>
            <div>
              <RiDeleteBin6Fill onClick={ () => clickHandler(item)}/>
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
