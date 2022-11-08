import './cart-icon.component.css'
const cartLogo = require('../../assets/cart-icon.png')

const CartIcon = () => {
    return(
        <div className='cart-icon'>
            <img src={cartLogo} alt="" srcset="" />
            <span>0</span>
        </div>
    )
}

export default CartIcon