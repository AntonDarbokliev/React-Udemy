import { useContext } from "react";
import { CartContext } from "../store/CartContext.jsx";
import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";
import { UserProgressContext } from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";


export default function Cart() {
  const { items,addItem, removeItem } = useContext(CartContext);
  const {progress,hideCart,showCheckout} = useContext(UserProgressContext)
  

  function handleModalClose() {
    hideCart()
  }

  function handleGoToCheckout(){
    showCheckout()
  }

  const cartTotal = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Modal className='cart' open={progress === 'cart' ? true : false}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {<CartItem item={item} itemIncrease={() => addItem(item)} itemDecrease={() => removeItem(item.id)}/>}
              {/* {item.name} - {item.quantity} */}
            </li>
          );
        })}
      </ul>
      <p className="cart-total">${cartTotal}</p>
      <p className="cart-actions">
        <Button textOnly onClick={handleModalClose}>Close</Button>
        <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
      </p>
      
    </Modal>
  );
}
