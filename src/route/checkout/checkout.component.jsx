import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout.component.scss'
import CheckOutItem from "../../components/checkout-item.component/checkout-item.component";

const CheckOut = () => {
    const {cartItems, addItemtoCart, removeItemfromCart, cartTotal} = useContext(CartContext)
    return(
        
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            <div>
            {
                cartItems.map((cartItem) => <CheckOutItem cartItem={cartItem} />)
            }
            </div>
           <div className="total">${cartTotal}</div>
        </div>
    )
}

export default CheckOut;