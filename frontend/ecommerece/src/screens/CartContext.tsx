import React, { createContext, useState, ReactNode } from 'react';
import ProductDetails from './ProductDetails';
import { handleUrlParams } from 'expo-router/build/fork/getStateFromPath-forks';
import CartPage from '../components/CartPageComponent';
type CartItem = {
    id: number;
    title: string;
    price: string;
};

interface CartContextType {
    carts: CartItem[];
    addItemtoCart: (item: CartItem) => void;
    removeItemFromCart: (id: number) => void;
}
const defaultCartContext: CartContextType = {
    carts: [],
    addItemtoCart: () => { },
    removeItemFromCart: () => { },
};
const CartContext = createContext<CartContextType>(defaultCartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [carts, setCarts] = useState<CartItem[]>([]);

    const addItemtoCart = (item: CartItem) => {
        setCarts((prev) => [...prev, item]);
    };

    const removeItemFromCart = (id: number) => {
        setCarts((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ carts, addItemtoCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext };
