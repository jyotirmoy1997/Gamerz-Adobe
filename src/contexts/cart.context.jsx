import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    /* Here, we are checking if the product we want to add actually exists or not
    If it exists, then we are getting the object reference in existing Cart Item */
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    /* If the cartItem exists, then we are incrementing the quantity value */ 
    if(existingCartItem){
        return cartItems.map((cartItem) => (
            cartItem.id === productToAdd.id ? {...cartItem, quantity : cartItem.quantity + 1} : cartItem
        ));
    }

    // If No match occurs, then return the default parameter with quantity set to 1
    return [...cartItems, {...productToAdd, quantity : 1}]

}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems : [],
    addItemtoCart : () => {}
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])


    const addItemtoCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const value = {isCartOpen, setIsCartOpen, cartItems, addItemtoCart}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
