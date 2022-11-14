import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.css'
const cartLogo = require('../../assets/cart-icon.png')

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    /* The toggle function checks the value and determines 
    whether or not to set or unset the value
    */
    const toggle = () => setIsCartOpen(!isCartOpen)


    // console.log(cartCount)
    return(
        <div className='cart-icon' onClick={toggle}>
            <img src={cartLogo} alt="" srcset="" />
            <span>{cartCount}</span>
        </div>
    )
}

export default CartIcon