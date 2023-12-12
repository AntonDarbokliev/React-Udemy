import { useContext } from "react";
import { CartContext } from "../store/CartContext.jsx";
import Modal from "./UI/Modal.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import { UserProgressContext } from "../store/UserProgressContext.jsx";

export default function Checkout() {
  const { items } = useContext(CartContext);

  const {progress, hideCheckout} = useContext(UserProgressContext)

    function handleCloseCheckout(){
        hideCheckout()
    }

  const totalAmount = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Modal open={progress === 'checkout'}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {totalAmount}</p>

        <Input label='Full Name' type='text' id='full-name'/>
        <Input label='E-Mail Address' type='email' id='email'/>
        <Input label='Street' type='text' id='street'/>

        <div className="control-row">
        <Input label='Postal Code' type='text' id='postal-code'/>
        <Input label='City' type='text' id='city'/>
        </div>

        <p className="modal-actions">
            <Button type='button' textOnly onClick={handleCloseCheckout}>Close</Button>
            <Button onClick={handleCloseCheckout} >Submit Order</Button>
        </p>


      </form>
    </Modal>
  );
}
