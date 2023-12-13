import { useContext, useState } from "react";
import { CartContext } from "../store/CartContext.jsx";
import Modal from "./UI/Modal.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import { UserProgressContext } from "../store/UserProgressContext.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const config = {
  method : 'POST',
  headers: {
    'Content-Type' : 'application/json'
  },
}

export default function Checkout() {
  const { items,clearCart } = useContext(CartContext);

  const {progress, hideCheckout} = useContext(UserProgressContext)

  const [showFinish,setShowFinish] = useState(false)

  const {sendRequest,loading,errors,data,clearData} = useHttp('http://localhost:3000/orders',[],config)

    function handleCloseCheckout(){
        hideCheckout()
    }

    function handleFinish () {
      
      hideCheckout()
      clearData()
      clearCart()
      setShowFinish(false)

    }

    async function handleSubmitCheckout(e){
      e.preventDefault()
      const formData = new FormData(e.target)
      const userData = Object.fromEntries(formData.entries())


      await sendRequest(
        {
          order:{
              items: items,
              customer : userData
            }})

            setShowFinish(true)

    }

  const totalAmount = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  let actions = (
    <>
    <Button type='button' textOnly onClick={handleCloseCheckout}>Close</Button>
    <Button >Submit Order</Button>
    </>
  )

  if(loading){
    actions = (
      <>
      <span>Sending order data</span>
      </>
    )
  }

  if(showFinish){
    console.log(data);
    return (
      
    <Modal open={progress === 'checkout'} onClose={handleCloseCheckout}>
      <h2>Success!</h2>
      <p>Your order was submitted successufully.</p>
      <p className="modal-actions">
      <Button onClick={handleFinish} >Ok</Button>
      </p>
    </Modal>
  

    )
  }

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

        {errors && <Error title={'Failed to submit order'} message={errors}/>}

        <p className="modal-actions">
            {actions}
        </p>


      </form>
    </Modal>
  );
}
