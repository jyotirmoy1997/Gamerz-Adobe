import './cart-item.component.css'

const CartItem = ({cartItem}) => {
    const {name, imageURL, price, quantity} = cartItem
    return(
        <div className='cart-item-container'>
           <img src={imageURL} alt="" />
           <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
           </div>
        </div>
    )
}

export default CartItem