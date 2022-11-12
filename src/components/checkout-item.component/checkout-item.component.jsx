import './checkout-item.component.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckOutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    const {clearCartItem, addItemtoCart, removeItemfromCart} = useContext(CartContext)
    const addItemHandler = () => addItemtoCart(cartItem)
    const removeItemHandler = () => removeItemfromCart(cartItem)
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt="" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler }>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
                </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearCartItem(cartItem)}>&#10005;</div>
        </div>
    )

}

export default CheckOutItem