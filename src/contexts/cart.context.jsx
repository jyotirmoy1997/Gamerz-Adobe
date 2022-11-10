import { createContext, useState, useEffect } from "react";

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

const removeCartItem = (cartItems, productToRemove) => {
    /* Here, we are checking if the product we want to add actually exists or not
    If it exists, then we are getting the object reference in existing Cart Item */
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id)

    /* If the cart Item exists, then we need to check if its quantity is 1 or not.
    If it is 1, then we need to remove the item from the cart */
    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
    }

    /* If the cartItem exists, then we are decrementing the quantity value */ 
    return cartItems.map((cartItem) => (
        cartItem.id === productToRemove.id ? {...cartItem, quantity : cartItem.quantity - 1} : cartItem
    ));

}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems : [],
    addItemtoCart : () => {},
    removeItemfromCart : () => {},
    cartCount : 0
})




export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => (total + cartItem.quantity), 0)
        setCartCount(newCartCount)
    }, [cartItems])


    const addItemtoCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemfromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const value = {isCartOpen, setIsCartOpen, cartItems, addItemtoCart, cartCount, removeItemfromCart}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
