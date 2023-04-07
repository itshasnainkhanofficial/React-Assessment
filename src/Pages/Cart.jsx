import { useContext } from "react";
import { Context } from "../state/Context";
import styles from "./styles/cart.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Cart = () => {
  const { addToCart, cartItems, setCartItems } = useContext(Context);

  const clickHandler = (data) => {
    const isInCart = cartItems.find((item) => item.id === data.id);
    if (isInCart) {
      setCartItems((prev) => prev.filter((item) => item.id !== data.id));
    } else {
      addToCart(data);
    }
  };



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
        <div>No cart item found</div>
      )}

      {cartItems.length > 0 ? (
        <p className={styles.total}>
          Total Price: ${Math.round(cartItems.length * 5.99)}
        </p>
      ) : null}
    </div>
  );
};

export default Cart;
