import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.component.css'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    // console.log("Item")
    return(
        <div className="cart-dropdown-container">
            <div className='cart-items'>
            {
                cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item}/>
                ))
            }
            </div>
            
            <button className='el7'>Go to Checkout</button>
        </div>
    )

}

export default CartDropdown