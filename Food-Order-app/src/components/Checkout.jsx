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

    function handleSubmitCheckout(e){
      e.preventDefault()

      const formData = new FormData(e.target)
      const userData = Object.fromEntries(formData.entries())

      fetch('http://localhost:3000/orders',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          order:{
            items: items,
            customer : userData
          }
        })
      })
    }

  const totalAmount = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Modal open={progress === 'checkout'}>
      <form onSubmit={handleSubmitCheckout}>
        <h2>Checkout</h2>
        <p>Total Amount: {totalAmount}</p>

        <Input label='Full Name' type='text' id='name'/>
        <Input label='E-Mail Address' type='email' id='email'/>
        <Input label='Street' type='text' id='street'/>

        <div className="control-row">
        <Input label='Postal Code' type='text' id='postal-code'/>
        <Input label='City' type='text' id='city'/>
        </div>

        <p className="modal-actions">
            <Button type='button' textOnly onClick={handleCloseCheckout}>Close</Button>
            <Button >Submit Order</Button>
        </p>


      </form>
    </Modal>
  );
}
