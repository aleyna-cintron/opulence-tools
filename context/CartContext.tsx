'use client'
import { useState, createContext } from "react"

// define the shape of the items within the cart
interface CartItemShape {
    id: string;
    name: string;
    quantity: number;
    price: number;
}
// define the shape of the cart
type CartShape = CartItemShape[]
// define the shape of the context needed for cart functionality
interface CartContextShape {
    cartItems: CartShape;
    // add product function
    addToCart: (product: CartItemShape) => void;
    // remove product function
    removeFromCart: (id: string) => void;
}
const cartContextFallback = {
    cartItems: [],
    addToCart(product:CartItemShape) {},
    removeFromCart(id: string) {}
}

// Creates the context of the cart
export const CartContext = createContext<CartContextShape>(cartContextFallback)

// Creates jsx so that users are able to alter their cart
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    // what do we want stored in usestate
    // the cart should include the items
    // i want my cart to be able to add and remove items
    // that means my cart needs to have a usestate function for making changes
    const [cartItems, setCartItems]= useState<CartShape>([])
    // now we want to be able to set cart items by creating functions

    const addToCart = (product: CartItemShape) => {
        // check if product already exists in cart
        if (cartItems.some((item) => item.id === product.id)) {
            const cartWithExistedItem = cartItems.map((item) => {
                if (item.id === product.id) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
            setCartItems(cartWithExistedItem)
        } else {
            setCartItems([...cartItems, product])
        }
    }
    const removeFromCart = (id: string) => {
        const newCart = cartItems.filter((item) => item.id != id)
        setCartItems(newCart)
    }

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>{children}</CartContext.Provider>
    )
}
