export default function CartItem({item, itemIncrease, itemDecrease}){
    return(
        <li className="cart-item">
            <p>{item.name} - {item.quantity} x ${item.price}</p>
            <p className="cart-item-actions">
                <button onClick={itemDecrease}>-</button>
                <button>{item.quantity}</button>
                <button onClick={itemIncrease}>+</button>
            </p>
        </li>
    )
}