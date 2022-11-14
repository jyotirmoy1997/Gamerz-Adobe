import { useReducer } from "react";
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

const clearCart = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
}

export const CartContext = createContext({
    isCartOpen : true,
    setIsCartOpen : () => {},
    cartItems : [],
    addItemtoCart : () => {},
    removeItemfromCart : () => {},
    clearCartItem : () => {},
    cartCount : 0,
    cartTotal : 0
})

const INITIAL_STATE = {
    isCartOpen : false,
    cartItems : [],
    cartCount : 0,
    cartTotal : 0
}

const cartReducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case 'SET_CART_ITEMS':
            return {
                // Keep the rest of the state as it is, only update the explicitely mentioned
                // key
                ...state,
                ...payload
            }
        case 'TOGGLE_CART':
            return {
                // Keep the rest of the state as it is, only update the explicitely mentioned
                // key
                ...state,
                isCartOpen : payload
            }
        default:
            throw new Error(`Unhandled type ${type}`)
    }
}

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const {cartItems, cartCount, cartTotal, isCartOpen} = state

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => (total + cartItem.quantity), 0)
        const newCartTotal = newCartItems.reduce((total, cartItem) => (total + cartItem.quantity * cartItem.price), 0)
        dispatch({type : 'SET_CART_ITEMS', payload : {
            cartItems : newCartItems, 
            cartCount : newCartCount,
            cartTotal : newCartTotal
        }})
    }

    const addItemtoCart = (productToAdd) => {
        const newCartItems = (addCartItem(cartItems, productToAdd))
        updateCartItemsReducer(newCartItems)
    }

    const removeItemfromCart = (productToRemove) => {
        const newCartItems = (removeCartItem(cartItems, productToRemove))
        updateCartItemsReducer(newCartItems)
    }

    const clearCartItem = (productToRemove) => {
        const newCartItems = (clearCart(cartItems, productToRemove))
        updateCartItemsReducer(newCartItems)
    }

    const setIsCartOpen = (bool) => {
        dispatch({type : 'TOGGLE_CART', payload : bool})
    }
    const value = {isCartOpen, 
                   setIsCartOpen, 
                   cartItems, 
                   addItemtoCart, 
                   cartCount, 
                   removeItemfromCart, 
                   clearCartItem,
                   cartTotal}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
