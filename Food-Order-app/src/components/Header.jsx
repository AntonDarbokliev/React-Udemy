import { useContext } from 'react'
import logo from '../assets/logo.jpg' 
import Button from './UI/Button.jsx'
import { CartContext } from '../store/CartContext.jsx'


export default function Header() {
    const {items} = useContext(CartContext)
    const totalCartItems = items.reduce((acc, item) => {
        return acc + item.quantity
    },0)
    return <header id="main-header">
        <div id='title'>
            <img src={logo}/>
            <h1 >FOOD ORDER</h1>
        </div>
        <nav>
            <Button textOnly={true}>Cart ({totalCartItems})</Button>
        </nav>
    </header>
}