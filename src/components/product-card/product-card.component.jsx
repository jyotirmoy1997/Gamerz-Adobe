import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './product-card.component.css'



const ProductCard = ({product}) => {
    const {name, imageURL, price} = product
    const {cartItems, addItemtoCart} = useContext(CartContext)

    // const addProductToCart = () => 
    // console.log(imageURL)

    const eventHandler = () => {
        console.log(cartItems)
        addItemtoCart(product)
    }

    return(
        <div className="product-card-container" >
            <div className='product-card-box'>
                <img src={imageURL} alt="" srcset="" />
                <button className='el7' onClick={eventHandler}>Add to Cart</button>
            </div>
            <div className="product-card-footer">
                <span>
                    {name}
                </span>
                <span>
                    {price}
                </span>
            </div>
        </div>
    )
}

export default ProductCard