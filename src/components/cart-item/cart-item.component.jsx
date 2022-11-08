import './cart-item.component.css'

const CartItem = ({cartItem}) => {
    const {name, quantity} = cartItem
    return(
        <div>
           <h4>{name}</h4>
           <span>{quantity}</span>
        </div>
    )
}

export default CartItem