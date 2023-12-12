import { useContext } from 'react'
import logo from '../assets/logo.jpg' 
import Button from './UI/Button.jsx'
import { CartContext } from '../store/CartContext.jsx'
import { UserProgressContext } from '../store/UserProgressContext.jsx'


export default function Header() {
    const {items} = useContext(CartContext)
    const {showCart} = useContext(UserProgressContext)


    function handleCartOpen() {
        showCart()
    }

    const totalCartItems = items.reduce((acc, item) => {
        return acc + item.quantity
    },0)
    return <header id="main-header">
        <div id='title'>
            <img src={logo}/>
            <h1 >FOOD ORDER</h1>
        </div>
        <nav>
            <Button textOnly={true} onClick={handleCartOpen}>Cart ({totalCartItems})</Button>
        </nav>
    </header>
}