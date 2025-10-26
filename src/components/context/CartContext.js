import React, { createContext, useState, useContext, useEffect } from 'react';
const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {

            const localData = localStorage.getItem('cartItems');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error("Error al cargar el carrito desde localStorage", error);
            return [];
        }
    });


    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);// State to hold items

    const addItemToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {

                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1, priceNumber: product.price }];
            }
        });
        console.log("Added to cart:", product.title);
    };


    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };


    const updateQuantity = (productId, amount) => {
        setCartItems(prevItems =>
            prevItems.map(item => {
                if (item.id === productId) {
                    const newQuantity = item.quantity + amount;

                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
                }
                return item;
            }).filter(item => item !== null)
        );
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.priceNumber * item.quantity, 0);

    const value = {
        cartItems,
        addItemToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};